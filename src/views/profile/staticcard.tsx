// ** Next Imports
import Image from 'next/image'

// MUI Imports
import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material'

// Mock data Imports
import { staticData } from 'src/mock/data'

// Custom components Imports
import Translations from 'src/@core/components/translations'
import { LineChartComponent } from './chart'

const StaticCard = () => {
  // Render the component
  return (
    <Stack
      direction='column'
      spacing={2}
      className='border border-solid border-brightgrey dark:border-crowblack shadow-sm rounded-xl p-4 dark:bg-midnightexpress'
    >
      <Stack direction='column' spacing={2}>
        <Stack direction='column' spacing={0.5}>
          <Typography className='font-Inter text-base font-semibold leading-6 text-midnightexpress dark:text-white'>
            <Translations text='Statistics' />
          </Typography>
          <Typography className='font-Inter text-sm font-normal leading-5 text-saltboxblue'>
            <Translations text='Check these stats below in case you have missed something' />
          </Typography>
        </Stack>
        <List className='flex flex-col w-full gap-4'>
          {staticData.map((item, index) => (
            <ListItem key={index} className='flex flex-row gap-2 px-0'>
              <Box
                className={`w-8 h-8 flex items-center justify-center rounded-lg `}
                sx={{ backgroundColor: item.bgColor }}
              >
                <Image src={item.staticIcon} alt='Static Icon' width={16} height={16} />
              </Box>
              <Stack direction='column' className='flex-1'>
                <Typography className='font-Inter text-sm font-normal text-saltboxblue'>{item.title}</Typography>
                <Stack direction='row' className='justify-between items-center dark:text-white text-black'>
                  <Typography className='font-Inter text-base font-semibold text-midnightexpresss'>
                    {item.valueEther} Eth
                  </Typography>
                  <Typography className='font-Inter text-sm font-normal text-saltboxblue'>~${item.valueUSD}</Typography>
                </Stack>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Divider className='bg-brightgrey dark:bg-crowblack w-full' />
      <Stack direction='column' spacing={2}>
        <Stack direction='row' className='justify-between'>
          <Typography className='font-Inter text-base font-semibold text-sambucus dark:text-white'>
            <Translations text='Total Distributions' />
          </Typography>
        </Stack>
        <Typography className='font-Inter text-2xl font-semibold text-midnightexpress leading-8 dark:text-white '>
          $35,298
        </Typography>
        <LineChartComponent />
      </Stack>
      <Divider className='bg-brightgrey dark:bg-crowblack w-full' />
      <Typography className='font-Inter text-sm font-normal leading-5 text-saltboxblue'>
        <Translations text='Joined since July 2024' />
      </Typography>
    </Stack>
  )
}

export default StaticCard
