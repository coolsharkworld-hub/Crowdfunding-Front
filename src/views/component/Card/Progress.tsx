// ** React Imports
import { FC } from 'react'

// ** MUI imports
import { Stack, Typography } from '@mui/material'

// ** Custom Components imports
import Translations from 'src/@core/components/translations'
import ProgressBar from './ProgressBar'

interface CardProgressProps {
  tokenAvailable: number
}
const CardProgress: FC<CardProgressProps> = ({ tokenAvailable }) => {
  return (
    <Stack justifyContent='space-between' alignItems='center' direction='row'>
      <Typography className='w-1/2 text-saltboxblue font-Inter text-sm font-medium dark:text-white'>
        <Translations text='Token Available' />
      </Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' className='w-1/2 pl-6 gap-3'>
        <Stack className='w-3/4' alignItems='center'>
          <ProgressBar progress={tokenAvailable} />
        </Stack>
        <Typography className='w-1/4 flex flex-row-reverse font-Inter text-sm font-bold dark:text-white'>
          {tokenAvailable} %
        </Typography>
      </Stack>
    </Stack>
  )
}

export default CardProgress
