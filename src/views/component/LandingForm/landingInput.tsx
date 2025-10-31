// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Box } from '@mui/material'

// i18n Imports
import { useTranslation } from 'react-i18next'

const InputField = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box className='w-full'>
      <input
        type='text'
        id='input-field'
        value={value}
        onChange={handleInputChange}
        className='appearance-none rounded w-full py-2 px-3 font-Inter text-gray-700 leading-tight focus:outline-none border-none'
        placeholder={`${t('Select Location')}`}
      />
    </Box>
  )
}

export default InputField
