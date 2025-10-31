// ** MUI Imports
import { Box, Stack, Typography } from '@mui/material'

// ** Icons Import
import { IoIosNotificationsOutline } from 'react-icons/io'

// ** Custom components Imports
import Translations from 'src/@core/components/translations'

export default function Notification() {
  return (
    <Box className='lg:w-360 h-500 border p-5 border-solid border-brightgrey shadow-sm rounded-xl gap-5 dark:border-crowblack w-full'>
      <Typography className='font-Inter text-xl font-semibold text-midnightexpress dark:text-white'>
        <Translations text='Recent Notifications' />
      </Typography>
      <Stack direction='column' className='gap-6 justify-center items-center h-full'>
        <Stack className='w-12 h-12 rounded-full border-3 border-solid border-cascadingwhite dark:border-crowblack bg-whiteedgar dark:bg-kon justify-center items-center'>
          <IoIosNotificationsOutline size={24} color='#64748B' />
        </Stack>
        <Stack direction='column' className='justify-center w-240'>
          <Typography className='font-Inter text-base font-semibold text-midnightexpress text-center dark:text-white'>
            <Translations text='You have no notifications!' />
          </Typography>
          <Typography className='font-Inter font-normal text-sm text-saltboxblue text-center'>
            <Translations text='If you will get any notifications we will tell you about it.' />
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
