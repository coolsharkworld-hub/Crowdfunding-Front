// ** React Imports
import { MouseEvent } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

// ** Types Import
import { ChartDataOption, ChartOptionProps } from 'src/types'

// ** Custom components Import
import Translations from 'src/@core/components/translations'

// ** Images Import
import lower from '../../../public/img/lower.png'
import higher from '../../../public/img/higher.png'

const ChartOption = ({ dataOption, setDataOption }: ChartOptionProps) => {
  const handleChange = (event: MouseEvent<HTMLElement>, newDataOption: ChartDataOption) => {
    setDataOption(newDataOption)
  }

  return (
    <Stack direction='row' className='justify-between'>
      <ToggleButtonGroup
        value={dataOption}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
        className='h-10 max-md:hidden dark:bg-bluezodiac rounded-lg shadow-sm'
      >
        <ToggleButton value='price' className='capitalize gap-1 rounded-l-lg dark:text-white'>
          <Translations text='Price' />
        </ToggleButton>
        <ToggleButton value='marketcap' className='capitalize gap-1 rounded-r-lg dark:text-white'>
          <Translations text='MC' />
        </ToggleButton>
      </ToggleButtonGroup>
      <Stack direction='row' className='items-center '>
        <Image src={lower} alt='lower' />
        <Typography className='mr-5 font-Inter font-medium text-xs lg:text-sm dark:text-white text-black'>
          <Translations text={`Lower ${dataOption === 'price' ? 'Price' : 'Market cap'}`} />
        </Typography>
        <Image src={higher} alt='higher' />
        <Typography className='font-Inter font-medium text-xs lg:text-sm dark:text-white text-black'>
          <Translations text={`Higher ${dataOption === 'price' ? 'Price' : 'Market cap'}`} />
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ChartOption
