// ** React Imports
import { FC } from 'react'

// ** MUI imports
import { List, ListItem, Stack, Typography } from '@mui/material'

// ** Icon Imports
import { IoIosInformationCircleOutline } from 'react-icons/io'

// ** Custom Components imports
import Translations from 'src/@core/components/translations'

interface CardInfoProps {
  cardInfo: {
    token: number
    IRP: number
    APR: number
    valueGrowth: number
    minInverstment: number
  }
}

const CardInfo: FC<CardInfoProps> = ({ cardInfo }) => {
  const cardData = [
    { label: 'Token', value: `$${cardInfo.token}` },
    { label: 'IRR', value: `${cardInfo.IRP}%` },
    { label: 'APR', value: `${cardInfo.APR}%` },
    { label: 'Min.Investment', value: `$${cardInfo.minInverstment}` },
    { label: 'Value growth', value: `${cardInfo.valueGrowth}%` }
  ]

  return (
    <List className='p-0'>
      {cardData.map((item, index) => (
        <ListItem key={index} className='p-0'>
          <Stack direction='row' alignItems='center' gap={1} className='w-full'>
            <Typography className='text-saltboxblue font-Inter text-sm font-medium dark:text-white'>
              <Translations text={item.label} />
            </Typography>
            {[1, 2].includes(index) && <IoIosInformationCircleOutline size={14} className='text-saltboxblue' />}
          </Stack>
          <Typography
            className={`${
              index == 4 ? 'text-growingnature dark:text-growingnature' : 'text-midnightexpress'
            } font-Inter text-sm font-bold dark:text-white`}
          >
            {item.value}
          </Typography>
        </ListItem>
      ))}
    </List>
  )
}

export default CardInfo
