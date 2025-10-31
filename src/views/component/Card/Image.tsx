// ** React Imports
import { FC } from 'react'

// ** Next imports
import Image from 'next/image'

// ** MUI imports
import { Box, Stack, Typography } from '@mui/material'

// ** Icon imports
import { BiHeart } from 'react-icons/bi'

// ** Component imports
import IconButton from 'src/@core/components/icon-button'
import Ribbon from './Ribbon'

interface CardImageProps {
  propertyPrice: number
  imgUrl: string
  ribbonflag?: boolean
}

const CardImage: FC<CardImageProps> = ({ imgUrl, propertyPrice, ribbonflag = false }) => {
  return (
    <Box className='relative pt-55p'>
      <Box className='absolute inset-0 cursor-pointer overflow-hidden rounded-lg'>
        <Stack
          className='w-full absolute z-20 bottom-0 property-price px-5 py-3 rounded-b-lg'
          justifyContent='space-between'
          direction='row'
        >
          <Typography className='font-Inter text-white font-bold text-14'>Property Price</Typography>
          <Typography className='font-Inter text-white font-bold text-14'>${propertyPrice}</Typography>
        </Stack>
        <Image src={imgUrl} alt='home' layout='fill' objectFit='cover' className='rounded-lg card-img' />
      </Box>
      {ribbonflag && <Ribbon text='POPULAR' color='bg-couldFly' />}
      <IconButton className='rounded-lg absolute right-2 top-2 w-6 h-6 dark:hover:text-crowblack p-0'>
        <BiHeart className='w-4 h-4' />
      </IconButton>
    </Box>
  )
}

export default CardImage
