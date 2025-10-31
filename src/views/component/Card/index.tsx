// ** React Imports
import { FC } from 'react'

// ** MUI imports
import { Box, Divider, Stack } from '@mui/material'

// ** Type import
import { CardProps } from 'src/types'

// ** Custom Components imports
import CardImage from './Image'
import CardTitle from './Title'
import CardInfo from './Info'
import CardProgress from './Progress'
import CardButton from './Button'
import CardPrice from './Price'

const Card: FC<CardProps> = ({
  id = '0',
  shape,
  imgUrl,
  address,
  street,
  price,
  propertyPrice,
  cardInfo,
  tokenAvailable,
  ribbonflag = false
}) => {
  return (
    <Box className='house-card w-full'>
      {shape == 'portrait' ? (
        <Stack
          direction='column'
          className='w-full border border-solid border-brightgrey rounded-xl dark:border-dark:text-white dark:border-crowblack'
        >
          <CardImage imgUrl={imgUrl} ribbonflag={ribbonflag} propertyPrice={propertyPrice} />
          <Stack direction='column' className='p-4 pt-3'>
            <CardTitle address={address} street={street} shape='portrait' />
            <Divider className='my-3 bg-brightgrey dark:bg-crowblack' />
            <CardInfo cardInfo={cardInfo} />
            <CardProgress tokenAvailable={tokenAvailable} />
            <Box className='w-full pt-4'>
              <CardButton id={id} />
            </Box>
          </Stack>
        </Stack>
      ) : (
        <Stack className='p-4 gap-5 border border-brightgrey rounded-xl dark:border-crowblack dark:text-white'>
          <Stack direction='column' className='flex-1 gap-4' justifyContent='space-between'>
            <CardTitle address={address} street={street} shape='landscape' />
            <CardInfo cardInfo={cardInfo} />
            <CardProgress tokenAvailable={tokenAvailable} />
          </Stack>
          <Stack direction='column' className='min-w-48 w-2/6 gap-4' justifyContent='space-between'>
            <Stack direction='column' className='gap-5'>
              <CardImage imgUrl={imgUrl} propertyPrice={propertyPrice} />
              <CardPrice price={price} />
            </Stack>
            <CardButton id={id} />
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

export default Card
