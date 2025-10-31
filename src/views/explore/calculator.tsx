// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Box, Divider, List, ListItem, Slider, Stack, Typography } from '@mui/material'

// ** Icon Imports
import { IoIosInformationCircleOutline } from 'react-icons/io'

// ** Mock data Imports
import { calculatorData } from 'src/mock/data'

// ** Utils Imports
import { convertPeriod } from 'src/utils/helper'

//Custom components Import
import Input from 'src/@core/components/input'
import Translations from 'src/@core/components/translations'

const contentData = [
  { label: calculatorData.tokensToGet.label, value: calculatorData.tokensToGet.value },
  { label: calculatorData.actualInvestmentAmount.label, value: calculatorData.actualInvestmentAmount.value }
]

const projectData = [
  {
    label: calculatorData.projectedTotalIncome.label,
    value: calculatorData.projectedTotalIncome.value,
    icon: <IoIosInformationCircleOutline />
  },
  {
    label: calculatorData.projectedRentalIncome.label,
    value: calculatorData.projectedRentalIncome.value,
    icon: <IoIosInformationCircleOutline />
  },
  {
    label: calculatorData.projectionAppreciation.label,
    value: calculatorData.projectionAppreciation.value,
    icon: <IoIosInformationCircleOutline />
  }
]

const Calculator = () => {
  const [value, setValue] = useState<number>(40)

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue)
    }
  }

  return (
    <Stack
      direction='column'
      className='p-4 border border-solid border-brightgrey rounded-xl shadow-sm gap-5 dark:border-crowblack dark:bg-midnightexpress'
    >
      <Typography className='font-Inter text-xl font-semibold leading-7 text-midnightexpress dark:text-white'>
        <Translations text='Calculator' />
      </Typography>
      <Stack direction='column' className='w-full gap-1'>
        <Typography className='font-Inter dark:text-white text-black'>
          <Translations text={calculatorData.investmentAmount.label} />
        </Typography>
        <Input className='w-full rounded-md' />
        <Typography className='font-Inter text-saltboxblue text-sm font-normal'>
          <Translations text={calculatorData.investmentAmount.value} />
        </Typography>
      </Stack>
      <Stack direction='column' className='w-full gap-4'>
        <Typography className='font-Inter dark:text-white text-black'>
          <Translations text={calculatorData.investmentPeriod.label} />
        </Typography>
        <Typography className='bg-creamyavocardo rounded-full py-1 w-20 items-center flex justify-center font-Inter text-base font-normal text-midnightexpress mx-auto'>
          {convertPeriod(value)}
        </Typography>
        <Stack direction='column' className='w-full'>
          <Box className='relative w-full h-8'>
            <Slider
              getAriaLabel={() => 'Investment Period'}
              value={value}
              min={3}
              max={60}
              valueLabelDisplay='auto'
              onChange={handleChange}
              sx={{
                color: '#84CC16',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#84CC16',
                  '&:hover': {
                    backgroundColor: '#84CC16'
                  }
                },
                '& .MuiSlider-track': {
                  backgroundColor: '#84CC16'
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#dbdbdb'
                }
              }}
            />
          </Box>
          <Stack direction='row' className='w-full justify-between'>
            <Typography className='font-Inter text-base font-normal text-midnightexpress flex flex-row dark:text-white'>
              <Typography
                component='strong'
                className='font-semibold font-Inter text-base text-midnightexpress flex flex-row dark:text-white'
              >
                {calculatorData.investmentPeriod.months}
              </Typography>
              /
              <Translations text='months' />
            </Typography>
            <Typography className='font-Inter text-base font-normal text-midnightexpress flex flex-row dark:text-white'>
              <Typography
                component='strong'
                className='font-semibold font-Inter text-base text-midnightexpress flex flex-row dark:text-white'
              >
                {calculatorData.investmentPeriod.maxYears}
              </Typography>
              /
              <Translations text='years' />
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider className='dark:bg-crowblack bg-brightgrey' />
      <List className='w-full flex flex-col gap-4 p-0'>
        {contentData.map((item, index) => (
          <ListItem key={index + item.label} className='w-full flex justify-between p-0'>
            <Typography className='font-Inter text-base font-medium text-saltboxblue flex flex-row items-center gap-1'>
              {item.label}
            </Typography>
            <Typography className='font-Inter text-base font-bold text-midnightexpress dark:text-white'>
              $ {typeof item.value === 'number' ? item.value : `$${item.value}`}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider className='dark:bg-crowblack bg-brightgrey' />
      <List className='w-full flex flex-col gap-1 p-0'>
        {projectData.map((item, index) => (
          <ListItem key={index + item.label} className='w-full flex justify-between p-0'>
            <Typography className='font-Inter text-base font-medium text-saltboxblue flex flex-row items-center gap-1'>
              <Translations text={item.label} />
              {item.icon}
            </Typography>
            <Typography className='font-Inter text-base font-bold text-midnightexpress dark:text-white'>
              $ {typeof item.value === 'number' ? item.value : `$${item.value}`}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider className='dark:bg-crowblack bg-brightgrey h-2p' />
      <Stack direction='row' className='w-full justify-between'>
        <Typography className='font-Inter text-base font-medium text-saltboxblue flex flex-row items-center gap-1'>
          <Translations text={calculatorData.finalBalance.label} />
        </Typography>
        <Typography className='font-Inter text-base font-bold text-midnightexpress dark:text-white'>
          $ {calculatorData.finalBalance.value}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Calculator
