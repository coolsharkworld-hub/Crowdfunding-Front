// ** React Imports
import { memo } from 'react'

// ** Next Imports
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Imports
import { Box, Divider, Stack, Typography } from '@mui/material'

// ** Icon Import
import { AiOutlineEdit } from 'react-icons/ai'

// ** Custom Component
import Translations from 'src/@core/components/translations'

// ** Util Imports
import { useSelector } from 'src/store'
import { calculateAddress } from 'src/utils/helper'

// ** Config
import config from 'src/configs'

// ** Image
import profileImage from '../../../public/img/profile.png'

const ProfileCard = () => {
  const { wallet, user } = useSelector(store => store.auth)

  return (
    <Stack
      direction='column'
      spacing={2}
      className='rounded-xl border border-solid border-brightgrey p-4 dark:bg-midnightexpress dark:border-crowblack shadow-sm'
    >
      <Stack direction='row' spacing={2}>
        <Box className='w-90 h-90 rounded-full border-3 border-cascadingwhite bg-whiteedgar'>
          {user.avatar ? (
            <Image
              src={`${config.mediaUrl}/${user.avatar}`}
              alt='Avatar'
              width={90}
              height={90}
              className='rounded-full'
            />
          ) : (
            <Image src={profileImage} alt='Profile Image' width={90} height={90} layout='fixed' />
          )}
        </Box>
        <Stack direction='column' className='flex-1 py-2 justify-between'>
          <Typography className='font-Inter text-2xl font-semibold leading-9 text-sambucus dark:text-white'>
            {user.userName || 'User Name'}
          </Typography>
          <Typography className='font-Inter text-sm font-medium text-saltboxblue dark:text-blueblouse dark:bg-bluezodiac dark:border-crowblack px-4 w-fit py-1 rounded-full bg-brightgrey'>
            {calculateAddress(wallet)}
          </Typography>
        </Stack>
      </Stack>
      <Divider className='bg-brightgrey dark:bg-crowblack w-full' />
      <Link
        href='/profile/edit'
        className='flex flex-row justify-center gap-2 items-center rounded-md shadow-sm border border-bellflowerblue py-2 font-Inter text-sm font-medium leading-6 hover:shadow-md transition-shadow duration-300 ease-in-out mb-4 dark:text-white text-black dark:bg-bluezodiac dark:border-crowblack no-underline'
      >
        <AiOutlineEdit size={20} />
        <Translations text='Edit Profile' />
      </Link>
      <Typography className='font-Inter text-sm font-normal leading-5 text-saltboxblue'>
        <Translations text='Joined since July 2024' />
      </Typography>
    </Stack>
  )
}

export default memo(ProfileCard)
