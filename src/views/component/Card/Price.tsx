// ** React Imports
import { FC } from 'react'

// ** MUI imports
import { Stack, Typography } from '@mui/material'

// ** Custom Components imports
import Translations from 'src/@core/components/translations'

interface CardPriceProps {
  price: number
}

const CardPrice: FC<CardPriceProps> = ({ price }) => {
  return (
    <Stack justifyContent='space-between'>
      <Typography className='font-Inter text-sm font-normal text-saltboxblue'>
        <Translations text='Price' /> :
      </Typography>
      <Typography className='font-Inter text-sm font-bold text-black dark:text-white'> ${price}</Typography>
    </Stack>
  )
}

export default CardPrice
