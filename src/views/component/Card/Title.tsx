// ** React Imports
import { FC } from 'react'

// ** MUI imports
import { Stack, Typography } from '@mui/material'

// ** Icon imports
import { IoLocationOutline } from 'react-icons/io5'

// ** Custom Components imports
import Translations from 'src/@core/components/translations'

interface CardTitleProps {
  shape: 'landscape' | 'portrait'
  address: string
  street: string
}

const CardTitle: FC<CardTitleProps> = ({ address, street, shape }) => {
  return (
    <Stack direction='column'>
      <Typography
        className={`${
          shape == 'portrait' ? 'text-xl' : 'text-2xl'
        } text-sambucus font-Inter font-semibold dark:text-white`}
      >
        <Translations text={address} />
      </Typography>
      <Typography className='font-Inter font-normal text-saltboxblue gap-1 flex flex-row dark:text-white'>
        <IoLocationOutline size={20} className='text-saltboxblue' />
        <Translations text={street} />
      </Typography>
    </Stack>
  )
}

export default CardTitle
