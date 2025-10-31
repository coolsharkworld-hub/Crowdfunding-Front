import { FC } from 'react'
import { List, ListItem, Stack, Typography } from '@mui/material'
import Translations from 'src/@core/components/translations'

interface CardInfoProps {
  propertyPrice: number
  tokenPrice: number
}

const PropertyPrice: FC<CardInfoProps> = ({ propertyPrice, tokenPrice }) => {
  const propertyData = [
    { label: 'Property Price', value: `$${propertyPrice}` },
    { label: 'Token Price', value: `$${tokenPrice}` }
  ]

  return (
    <List className='p-0'>
      {propertyData.map((item, index) => (
        <ListItem key={index} className='p-0'>
          <Stack direction='row' alignItems='center' gap={1} className='w-full'>
            <Typography className='text-saltboxblue font-Inter text-sm font-medium dark:text-white'>
              <Translations text={item.label} />
            </Typography>
          </Stack>
          <Typography className='text-midnightexpress font-Inter text-sm font-bold dark:text-white'>
            <Translations text={item.value} />
          </Typography>
        </ListItem>
      ))}
    </List>
  )
}

export default PropertyPrice
