// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Stack, Typography } from '@mui/material'

// ** Types Import
import { ChartDataOption, FilterOption } from 'src/types'

// ** Mock data Import
import { simulationData } from 'src/mock/data'

// ** Custom components Import
import ChartOption from 'src/views/simulation/chartoption'
import Notification from 'src/views/simulation/notification'
import InvestGraph from 'src/views/simulation/investgraph'
import FilterOptions from 'src/views/simulation/filteroptions'
import Translations from 'src/@core/components/translations'
import PropertyCard from 'src/views/component/PropertyCard'

const Simulation = () => {
  const [dataOption, setDataOption] = useState<ChartDataOption>('price')
  const [alignment, setAlignment] = useState<FilterOption>('price')

  return (
    <Stack className='lg:px-100 px-8 py-6 max-md:px-2 lg:flex-row gap-8 dark:bg-libertyblue bg-white min-h-screen flex-col'>
      <Stack direction='column' className='lg:w-calc-100-minus-360 gap-4 w-full'>
        <Stack
          direction='column'
          className='w-full border border-solid border-brightgrey shadow-sm p-5 rounded-xl gap-3 dark:bg-midnightexpress dark:border-crowblack'
        >
          <ChartOption property='all' dataOption={dataOption} setDataOption={setDataOption} />
          <InvestGraph dataOption={dataOption} />
        </Stack>
        <Stack className='w-full xl:flex-row flex-col justify-between items-center xl:gap-0 gap-6'>
          <Typography className='font-Inter text-base text-midnightexpress font-medium dark:text-white'>
            <Translations text='All Properties' />
          </Typography>
          <FilterOptions alignment={alignment} setAlignment={setAlignment}></FilterOptions>
        </Stack>
        <Stack>
          {simulationData.map((item, index) => (
            <PropertyCard property={item} key={index + item.title} />
          ))}
        </Stack>
      </Stack>
      <Notification />
    </Stack>
  )
}

export default Simulation
