// React Imports
import { MouseEvent } from 'react'

// MUI Imports
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

// Icons Import
import { IoArrowDownSharp, IoArrowUpSharp } from 'react-icons/io5'

// Types Import
import { FilterOption, FilterOptionsProps } from 'src/types'

// Custom components Import
import Translations from 'src/@core/components/translations'

const FilterOptions = ({ alignment, setAlignment }: FilterOptionsProps) => {
  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: FilterOption) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
      className='h-10 max-md:hidden dark:bg-bluezodiac rounded-lg shadow-sm'
    >
      <ToggleButton value='Price' className='capitalize gap-1 rounded-l-lg dark:text-white'>
        <IoArrowUpSharp size={20} />
        <Translations text='Price' />
      </ToggleButton>
      <ToggleButton value='Date' className='capitalize gap-1 rounded-r-lg dark:text-white'>
        <IoArrowDownSharp size={20} />
        <Translations text='Date' />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default FilterOptions
