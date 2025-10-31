// ** React Imports
import { useContext, useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Imports
import { Box, Divider, IconButton, List, ListItem, Stack, Typography } from '@mui/material'

// ** Icon Imports
import { IoWalletOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

// ** ConnectKit Imports
import { ConnectKitButton } from 'connectkit'
import { useAccount, useSignMessage } from 'wagmi'

// ** Config Imports
import { linkItems } from 'src/navigation'

// ** Types Imports
import { SignMsg } from 'src/types'

// ** Utils Imports
import { fetchUser, verifyWallet } from 'src/api'
import useScrollingUp from 'src/utils/useScrollingUp'
import { calculateAddress } from 'src/utils/helper'

// ** Hooks Imports
import { dispatch, useSelector } from 'src/store'
import { LoadingContext } from 'src/context/LoadingContext'
import { login, setUserData, setWallet } from 'src/store/reducers/auth'
import { setTheme } from 'src/store/reducers/setting'

// ** Custom components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import Translations from 'src/@core/components/translations'

// ** Images Imports
import logoImg from '../../public/img/logo.png'

const Header = () => {
  const scrolledUp = useScrollingUp()
  const { wallet } = useSelector(store => store.auth)
  const { setLoading } = useContext(LoadingContext)
  const { address, isConnected } = useAccount()
  const { signMessage, data, isSuccess } = useSignMessage()
  const { theme } = useSelector(store => store.setting)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [toggleId, setToggleId] = useState<string>('')
  const toggleTheme = () => {
    dispatch(setTheme(!theme))
  }

  const handleToggle = () => {
    const newVisibility = !isVisible
    const newToggleId = theme ? (newVisibility ? 'hamburger-open' : '') : newVisibility ? 'hamburger-open-bright' : ''
    setIsVisible(newVisibility)
    setToggleId(newToggleId)
    setIsMobile(!isMobile)
  }

  const onChangeThemeHandler = () => {
    toggleTheme()
    setIsVisible(false)
    setToggleId('')
    setIsMobile(false)
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const signMsg: SignMsg = {
        wallet: address || '',
        signature: data || ''
      }
      const uid = await verifyWallet(signMsg)
      const userInfo = await fetchUser(address || '')
      dispatch(login(uid))
      dispatch(setUserData(userInfo))
    } catch (error) {
      console.error('Error verifying wallet:', error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (wallet) return
    if (isConnected && address) {
      dispatch(setWallet(address))
      signMessage({ message: address })
    }
  }, [isConnected])

  useEffect(() => {
    if (address && data) {
      fetchData()
    }
  }, [isSuccess])

  return (
    <Box
      component='header'
      className={`top-0 left-0 right-0 z-50 dark:bg-libertyblue bg-white trasition-all duration-300 ${scrolledUp ? 'sticky-header' : ''}`}
    >
      <Box className='mx-auto container'>
        <Box className='flex justify-between h-20'>
          <Box className='w-full md:hidden flex items-center justify-between'>
            <Stack component={Link} href='/' direction='row' className='items-center no-underline'>
              <Image src={logoImg} alt='logo' className='mr-2 w-fit h-fit' />
              <Typography className='font-Inter text-2xl dark:text-white text-midnightexpress font-bold flex flex-row max-sm:text-22'>
                <Translations text='RWA' />
                &nbsp;
              </Typography>
              <Typography className='font-Inter text-2xl dark:text-white text-midnightexpress font-normal flex flex-row max-sm:text-22'>
                <Translations text='Estate' />
                &nbsp;
              </Typography>
            </Stack>
            <IconButton className='hamburger w-10 h-10' onClick={handleToggle} aria-label='Toggle Menu'>
              {theme ? (
                <Typography className={`hamburger-span ${toggleId}`} />
              ) : (
                <Typography className={`hamburger-span-bright ${toggleId}`} />
              )}
            </IconButton>
          </Box>
          <Box className='md:flex flex-row items-center gap-6 hidden'>
            <Stack component={Link} href='/' className='flex flex-row items-center no-underline'>
              <Image src={logoImg} alt='logo' className='mr-2 w-fit h-fit' />
              <Typography className='font-Inter text-2xl text-midnightexpress dark:text-white font-bold flex flex-row max-sm:text-22'>
                <Translations text='RWA' />
                &nbsp;
              </Typography>
              <Typography className='font-Inter text-2xl text-midnightexpress dark:text-white font-normal flex flex-row max-sm:text-22'>
                <Translations text='Estate' />
                &nbsp;
              </Typography>
            </Stack>
            <List className='flex flex-row items-center max-md:hidden'>
              {linkItems.map((item, index) => (
                <ListItem key={index} className='px-3 list-none'>
                  <Link
                    href={item.url}
                    className='no-underline text-blueblouse font-Inter font-medium text-base transition duration-300 ease-in-out transform hover:scale-110  dark:hover:text-white hover:text-midnightExpress'
                  >
                    <Translations text={item.title} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box className='md:flex flex-row items-center gap-3 hidden'>
            <ConnectKitButton.Custom>
              {({ show }) => (
                <IconButton
                  className={`w-10 h-10 rounded-lg border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack text-base ${
                    address ? 'w-fit px-2' : 'w-10'
                  }`}
                  onClick={show}
                >
                  {address ? calculateAddress(address) : <IoWalletOutline size={20} />}
                </IconButton>
              )}
            </ConnectKitButton.Custom>
            <OptionsMenu />
            <IconButton
              className='w-10 h-10 rounded-lg border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack'
              onClick={toggleTheme}
            >
              {theme ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}
            </IconButton>
          </Box>
          <Box
            className={`absolute h-screen left-0 right-0 dark:bg-libertyblue bg-white z-20 transition-all duration-500 ease-in-out flex flex-col items-center mobile-menu ${
              isMobile ? 'w-full' : 'w-0'
            }`}
          >
            {isMobile && (
              <Box className='w-full px-6 flex flex-col'>
                <Box className={`h-20 flex transition-all duration-500 ease-in-out ${isMobile ? 'w-full' : 'w-0'}`}>
                  <Stack component={Link} href='/' className='flex flex-row items-center no-underline'>
                    <Image src={logoImg} alt='logo' className='mr-2 w-fit h-fit' />
                    <Typography className='font-Inter text-2xl dark:text-white text-midnightexpress font-bold flex flex-row max-sm:text-22'>
                      <Translations text='RWA' />
                      &nbsp;
                    </Typography>
                    <Typography className='font-Inter text-2xl dark:text-white text-midnightexpress font-normal flex flex-row max-sm:text-22'>
                      <Translations text='Estate' />
                      &nbsp;
                    </Typography>
                  </Stack>
                </Box>
                <List className='flex w-full flex-col justify-center items-center'>
                  {linkItems.map((item, index) => (
                    <ListItem key={`index${index}`} className='group relative px-2 mb-2 py-4 flex justify-center'>
                      <Link
                        href={item.url}
                        onClick={() => setIsMobile(false)}
                        className='font-Inter text-libertyblue dark:text-white font-medium text-base list-none no-underline'
                      >
                        <Translations text={item.title} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <ConnectKitButton.Custom>
                  {({ show }) => (
                    <IconButton
                      className='w-full h-10 rounded-lg border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack mb-4'
                      onClick={show}
                    >
                      {address ? calculateAddress(address) : <IoWalletOutline size={20} />}
                    </IconButton>
                  )}
                </ConnectKitButton.Custom>

                <IconButton
                  className='w-full h-10 rounded-lg border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack'
                  onClick={onChangeThemeHandler}
                >
                  {theme ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Divider className='dark:bg-crowblack bg-brightgrey' />
    </Box>
  )
}

export default Header
