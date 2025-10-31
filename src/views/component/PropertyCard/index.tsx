// ** React Imports
import React from 'react'

// ** MUI Imports
import { Stack, Typography } from '@mui/material'

// ** Icon imports
import { IoLocationOutline } from 'react-icons/io5'

// ** Types Import
import { PropertyCardProps } from 'src/types'

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { title, location, price, priceChange, pricePerSquareFoot, occupancyRate, avatarSrc } = property

  return (
    <Stack
      direction='row'
      className='border border-brightgrey dark:border-crowblack rounded-xl p-2 pr-4 flex flex-row mb-4 shadow-sm gap-2 dark:bg-midnightexpress'
    >
      <Stack direction='row' className='flex-1 gap-3'>
        <img src={avatarSrc} alt='homeavatar' className='h-12 w-12' />
        <Stack direction='column' className='justify-between'>
          <Typography className='text-midnightexpress font-Inter font-semibold text-base dark:text-white'>
            {title}
          </Typography>
          <Typography className='font-Inter font-normal text-saltboxblue gap-1 flex flex-row'>
            <IoLocationOutline size={20} color='#64748B' />
            {location}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction='row' className='w-1/2 gap-2 justify-between items-center max-md:w-fit'>
        <Typography className='font-Inter text-sm font-bold text-midnightexpress dark:text-white '>{price}</Typography>
        <Typography className='font-Inter text-sm font-bold text-growingnature max-md:hidden'>{priceChange}</Typography>
        <Typography className='font-Inter text-sm font-bold text-midnightexpress dark:text-white max-md:hidden'>
          {pricePerSquareFoot}
        </Typography>
        <Typography className='font-Inter text-sm font-bold text-midnightexpress dark:text-white max-md:hidden'>
          {occupancyRate}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default PropertyCard
