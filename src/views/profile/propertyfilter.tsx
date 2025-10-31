// ** React Imports
import { MouseEvent } from 'react'

// ** MUI Imports
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

// ** Icons Import
import { RxRocket } from 'react-icons/rx'
import { FaRegEdit } from 'react-icons/fa'

// ** Types Import
import { PropertyOption, PropertyFilterProps } from 'src/types'

// ** Custom Components Import
import Translations from 'src/@core/components/translations'

const PropertyFilter = ({ property, setProperty }: PropertyFilterProps) => {
  const handleChange = (event: MouseEvent<HTMLElement>, newProperty: PropertyOption) => {
    setProperty(newProperty)
  }

  return (
    <ToggleButtonGroup
      value={property}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
      className='h-10 max-md:hidden dark:bg-bluezodiac rounded-lg shadow-sm'
    >
      <ToggleButton
        value='all'
        className={`capitalize gap-1 rounded-l-lg dark:text-white font-semibold ${property === 'all' ? 'bg-washme text-blueblouse dark:bg-kon dark:border-crowblack dark:text-saltboxblue' : ''}`}
      >
        <RxRocket size={20} />
        <Translations text='All Properties' />
      </ToggleButton>
      <ToggleButton
        value='my'
        className={`capitalize gap-1 rounded-r-lg dark:text-white font-semibold ${property === 'my' ? 'bg-washme text-blueblouse dark:bg-kon dark:border-crowblack dark:text-saltboxblue' : ''}`}
      >
        <FaRegEdit size={20} />
        <Translations text='My Properties' />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default PropertyFilter
