// ** React Imports
import { useState, useEffect, useRef, useContext } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import { Box, Button, Divider, IconButton, List, ListItem, Stack, Typography } from '@mui/material'

// ** React Cropper Imports
import { Cropper } from 'react-advanced-cropper'

// ** Icons Import
import { FaRegHeart, FaRegClock } from 'react-icons/fa'
import { MdOutlineNotifications } from 'react-icons/md'
import { RiAccountCircleLine } from 'react-icons/ri'
import { FiUpload, FiPlus } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

// ** Types Import
import { AspectRatio, CropperRef } from 'src/types'

// ** Utils Import
import { calculateAddress, createFileFromBase64 } from 'src/utils/helper'
import { fetchUser, updateUser, uploadImage } from 'src/api'

// ** Hooks
import { dispatch, useSelector } from 'src/store'
import { setUserData } from 'src/store/reducers/auth'
import { LoadingContext } from 'src/context/LoadingContext'

// ** Custom components Import
import ProfileCard from 'src/views/profile/profilecard'
import Translations from 'src/@core/components/translations'
import Modal from 'src/@core/components/modal'
import Input from 'src/@core/components/input'
import FileInput from 'src/@core/components/fileInput'

// ** Images Import
import profileImage from '../../../../public/img/profile.png'

// ** CSS Imports
import 'react-advanced-cropper/dist/style.css'

const menuItems = [
  { icon: <RiAccountCircleLine size={20} />, label: 'Account' },
  { icon: <MdOutlineNotifications size={20} />, label: 'Notifications' },
  { icon: <FaRegHeart />, label: 'Favorites' },
  { icon: <FaRegClock />, label: 'History' }
]

const aspectRatio: AspectRatio = {
  minimum: 1,
  maximum: 1
}

const EditProfile = () => {
  const { setLoading } = useContext(LoadingContext)
  const { wallet } = useSelector(store => store.auth)

  const cropperRef = useRef<CropperRef | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [email, setEmail] = useState('')
  const [preview, setPreview] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [croppedImage, setCroppedImage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [defaultImage, setDefaultImage] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleClick = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onCrop = async (): Promise<void> => {
    const cropper = cropperRef.current
    if (cropper) {
      const canvas = cropper.getCanvas()
      const croppedImageData: string = canvas.toDataURL('image/jpeg')
      setCroppedImage(croppedImageData)
      setDefaultImage(false)
    }
    closeModal()
  }

  const onUpdateHandler = async () => {
    setLoading(true)
    try {
      if (!croppedImage) {
        const user = {
          userName,
          wallet,
          email
        }
        await updateUser(wallet, user)
      } else {
        const file = createFileFromBase64(croppedImage)
        const formData = new FormData()
        formData.append('file', file)
        const imgUrl = await uploadImage(formData)
        const user = {
          email,
          userName,
          avatar: imgUrl,
          wallet
        }
        await updateUser(wallet, user)
      }
    } catch (error) {
      console.error('Error updating user:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    const selectedFile = input.files?.[0] || null
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile))
      setIsModalOpen(true)
      input.value = ''
    }
  }

  const handleUploadImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const removeUploadImage = () => {
    setDefaultImage(true)
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const userInfo = await fetchUser(wallet)
      setUserName(userInfo?.userName)
      setEmail(userInfo?.email)
      setAvatar(userInfo?.avatar)
      dispatch(setUserData(userInfo))
    } catch (error) {
      console.error('Error verifying wallet:', error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box className='dark:bg-libertyblue bg-white min-h-screen transition-all duration-300'>
      <Stack direction='column' className='container mx-auto'>
        <List className=' flex flex-row gap-3 w-full flex-wrap py-3'>
          {menuItems.map((item, index) => (
            <ListItem
              key={index + item.label}
              onClick={() => handleClick(index)}
              className={`w-fit px-3 py-2 flex flex-row gap-2 font-Inter text-base font-medium items-center cursor-pointer dark:text-white text-black rounded-md  transition-colors duration-300 ease-in-out   ${selectedIndex === index ? ' dark:!text-midnightexpress bg-creamyavocardo' : ''}`}
            >
              {item.icon}
              <Translations text={item.label} />
            </ListItem>
          ))}
        </List>
        <Stack direction='column' spacing={3}>
          <Stack className='justify-between items-center md:flex-row'>
            <Stack direction='column' spacing={0.5} className='max-md:mb-4'>
              <Typography
                component='h4'
                className='font-Inter text-3xl font-semibold text-sambucus dark:text-white max-md:mb-2 my-0'
              >
                <Translations text='Personal Info' />
              </Typography>
              <Typography className='font-content text-base font-normals text-rainmaker dark:text-blueblouse'>
                <Translations text='Update your personal info with your data preferences' />
              </Typography>
            </Stack>
            <Button
              onClick={onUpdateHandler}
              className='px-4 py-2 bg-growingnature text-white font-Inter rounded-md font-medium leading-6 normal-case'
            >
              <Translations text='Save updates' />
            </Button>
          </Stack>
          <Divider className='dark:bg-crowblack bg-brightgrey' />
          <Stack className='lg:flex-row gap-8'>
            <Stack direction='column' className='flex-1 gap-8'>
              <Stack direction='row' className='h-fit justify-between profile-wrapper'>
                <Typography className='font-Inter text-base font-medium text-midnightexpress dark:text-white'>
                  <Translations text='Profile Photo' />
                </Typography>
                <Stack direction='row' className='gap-6 w-3/5 profile-photo'>
                  <Box className='w-90 h-90 rounded-full border-3 border-cascadingwhite bg-whiteedgar'>
                    {!defaultImage ? (
                      croppedImage !== '' ? (
                        <img src={croppedImage} alt='avatar' className='w-90 h-90 rounded-full' />
                      ) : avatar ? (
                        <Image
                          src={profileImage}
                          alt='Downloaded Image'
                          width={90}
                          height={90}
                          className='rounded-full'
                        />
                      ) : (
                        <Image src={profileImage} alt='Profile Image' width={90} height={90} />
                      )
                    ) : (
                      <Image src={profileImage} alt='Profile Image' width={90} height={90} />
                    )}
                  </Box>
                  <Stack className='xl:flex-row gap-4 items-center'>
                    <Button
                      className='px-4 flex gap-1 bg-white hover:bg-creamyavocardo dark:hover:bg-creamyavocardo hover:dark:text-freinachtblack text-midnightexpress shadow-sm border border-solid dark:bg-bluezodiac dark:text-white dark:border-crowblack normal-case rounded-md font-medium border-bellflowerblue'
                      onClick={handleUploadImage}
                    >
                      <FiUpload />
                      <Translations text='Change' />
                    </Button>
                    <Button
                      className='px-4 flex gap-1 bg-white hover:bg-creamyavocardo dark:hover:bg-creamyavocardo hover:dark:text-freinachtblack text-midnightexpress shadow-sm border border-solid dark:bg-bluezodiac dark:text-white dark:border-crowblack normal-case rounded-md font-medium border-bellflowerblue'
                      onClick={removeUploadImage}
                    >
                      <AiOutlineDelete />
                      <Translations text='Delete' />
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction='row' className='w-full justify-between'>
                <Typography className='font-Inter text-base font-medium text-midnightexpress dark:text-white'>
                  <Translations text='Full Name' />
                </Typography>
                <Input className='w-3/5' value={userName} onChange={e => setUserName(e.target.value)} />
              </Stack>
              <Stack direction='row' className='w-full justify-between'>
                <Typography className='font-Inter text-base font-medium text-midnightexpress dark:text-white'>
                  <Translations text='Email' />
                </Typography>
                <Input className='w-3/5' value={email} onChange={e => setEmail(e.target.value)} />
              </Stack>
              <Divider className='w-full bg-brightgrey dark:bg-crowblack' />

              <Stack className='flex-row justify-between max-md:flex-col max-md:gap-2'>
                <Stack direction='column' className='flex-1'>
                  <Typography className='font-Inter text-2xl font-semibold text-midnightexpress dark:text-white'>
                    <Translations text='Wallet Info' />
                  </Typography>
                  <Typography className='text-base font-normal text-rainmaker font-Inter dark:text-blueblouse'>
                    <Translations text='Update your wallet & preferences' />
                  </Typography>
                </Stack>
                <Button className='h-fit px-4 flex gap-1 bg-white hover:bg-creamyavocardo dark:hover:bg-creamyavocardo hover:dark:text-freinachtblack text-midnightexpress shadow-sm border border-solid dark:bg-bluezodiac dark:text-white dark:border-crowblack normal-case rounded-md font-medium border-bellflowerblue'>
                  <FiPlus />
                  <Translations text='Add wallet' />
                </Button>
              </Stack>
              <Stack direction='column' className='w-full gap-4'>
                <Stack
                  direction='row'
                  className='px-4 py-2 w-full border border-solid rounded-xl border-brightgrey items-center justify-between dark:border-crowblack'
                >
                  <Stack direction='row' className='gap-1'>
                    <Typography className='font-Inter text-base font-normal text-midnightexpress dark:text-white'>
                      {calculateAddress(wallet)}
                    </Typography>
                    <Typography className='font-Inter text-base text-saltboxblue'>Metamask</Typography>
                  </Stack>
                  <IconButton className='w-10 h-10 text-black dark:bg-bluezodiac border-3 border-solid dark:border-crowblack rounded-lg dark:text-white bg-whiteedgar border-cascadingwhite transition-all duration-300'>
                    <AiOutlineDelete />
                  </IconButton>
                </Stack>
                <Stack
                  direction='row'
                  className='px-4 py-2 w-full border border-solid rounded-xl border-brightgrey items-center justify-between dark:border-crowblack'
                >
                  <Stack direction='row' className='gap-1'>
                    <Typography className='font-Inter text-base font-normal text-midnightexpress dark:text-white'>
                      0psdad...72aiud
                    </Typography>
                    <Typography className='font-Inter text-base text-saltboxblue'>Phantom</Typography>
                  </Stack>
                  <IconButton className='w-10 h-10 text-black dark:bg-bluezodiac border-3 border-solid dark:border-crowblack rounded-lg dark:text-white bg-whiteedgar border-cascadingwhite transition-all duration-300'>
                    <AiOutlineDelete />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
            <Box className='lg:w-400 w-full'>
              <ProfileCard />
            </Box>
          </Stack>
          <FileInput ref={fileInputRef} accept='image/*' onChange={handleFileChange} />
          {preview && (
            <Modal isOpen={isModalOpen} onClose={closeModal} onSave={onCrop}>
              <Cropper
                src={preview}
                ref={ref => {
                  cropperRef.current = ref as CropperRef
                }}
                aspectRatio={aspectRatio}
                className='w-full h-auto max-h-[80vh] md:max-h-[60vh] object-cover'
              />
            </Modal>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default EditProfile
