// ** React Imports
import { FC } from 'react'

// ** Next imports
import Link from 'next/link'

// ** MUI imports
import { Stack } from '@mui/material'

// ** Custom Components imports
import Button from 'src/@core/components/button'
import Translations from 'src/@core/components/translations'

interface CardButtonProps {
  id: string
}

const CardButton: FC<CardButtonProps> = ({ id }) => {
  return (
    <Stack justifyContent='space-between' direction='row' gap={1}>
      <Button className='w-full text-midnightexpress hover:text-white bg-whiteedgar hover:bg-growingnature text-base dark:hover:text-crowblack'>
        <Translations text='Contact' />
      </Button>
      <Link href={`/explore/${id}`} className='w-full'>
        <Button className='w-full text-midnightexpress hover:text-white bg-whiteedgar hover:bg-growingnature text-base dark:hover:text-crowblack'>
          <Translations text='Details' />
        </Button>
      </Link>
    </Stack>
  )
}

export default CardButton
