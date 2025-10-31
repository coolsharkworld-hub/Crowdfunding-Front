// ** React Imports
import { FC } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI imports
import { Box, Typography } from '@mui/material'
import starsImage from '../../../../public/Frame.png'

interface RibbonProps {
  text: string
  color?: string
}

const Ribbon: FC<RibbonProps> = ({ text, color = 'bg-couldFly' }) => {
  return (
    <Box className={`absolute flex top-2 -left-2 w-28 px-4 py-1 ribbon lefts rounded-lg cursor-pointer ${color}`}>
      <Image src={starsImage} alt='start-image' />
      <Typography className='font-Inter text-12 leading-5 text-white'>{text}</Typography>
    </Box>
  )
}

export default Ribbon
