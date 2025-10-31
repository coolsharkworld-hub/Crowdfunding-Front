// ** React Imports
import { FC } from 'react'

// ** MUI imports
import { Box, Stack } from '@mui/material'

interface ProgressBarProps {
  progress: number
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Stack className='bg-creamyavocardo rounded-full h-1 w-full'>
      <Box
        className='bg-growingnature h-1 rounded-full transition-all duration-300'
        style={{ width: `${progress}%` }}
      />
    </Stack>
  )
}

export default ProgressBar
