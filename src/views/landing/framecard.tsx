// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import { Stack, Typography } from '@mui/material'

// ** Type Imports
import { FrameProps } from 'src/types'

// ** Custom Components Import
import Translations from 'src/@core/components/translations'

const FrameCard = ({ imgUrl, content, className }: FrameProps) => {
  return (
    <Stack
      direction='row'
      className={`w-280 rounded-full py-2 pl-2 pr-6 gap-2 items-center shadow-sm border border-solid border-brightgrey bg-white dark:bg-bluezodiac dark:border-crowblack ${className}`}
    >
      <Image src={imgUrl} alt='frame' className='w-12 h-12' width={48} height={48} />
      <Typography className='text-midnightexpress dark:text-white font-Inter text-xl font-bold'>
        <Translations text={content} />
      </Typography>
    </Stack>
  )
}

export default FrameCard
