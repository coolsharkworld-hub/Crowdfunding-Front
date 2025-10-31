// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import { Button, Stack, Typography } from '@mui/material'

// ** Custom Component Imports
import Translations from 'src/@core/components/translations'

// ** Image Imports
import female from '../../../public/img/Female.png'

const Issuer = () => {
  return (
    <Stack
      direction='column'
      className='p-4 border border-solid border-brightgrey rounded-xl shadow-sm gap-5 dark:border-crowblack dark:bg-midnightExpress bg-white'
    >
      <Typography className='font-Inter text-xl font-semibold text-midnightexpress dark:text-white'>
        <Translations text='Issuer' />
      </Typography>
      <Stack direction='row' className=' w-full justify-between items-center'>
        <Stack direction='row' className='gap-4'>
          <Image src={female} alt='avatar' className='w-fit h-fit' />
          <Stack direction='column'>
            <Typography className='font-Inter text-xl font-semibold dark:text-white text-black'>
              <Translations text='Sindy Rheaume' />
            </Typography>
            <Typography className='font-Inter text-sm font-medium text-saltboxblue'>Bragança</Typography>
          </Stack>
        </Stack>
        <Button className='py-2 px-4 bg-whiteedgar border-3 border-solid normal-case border-cascadingwhite text-midnightexpress rounded-lg font-Inter text-sm font-medium dark:bg-bluezodiac dark:border-crowblack dark:text-white'>
          <Translations text='Contract' />
        </Button>
      </Stack>
    </Stack>
  )
}

export default Issuer
