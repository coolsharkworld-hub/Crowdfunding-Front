// ** MUI Imports
import { Box, Divider, Stack, Typography, useMediaQuery } from '@mui/material'

// ** Icon Imports
import { BiSearchAlt } from 'react-icons/bi'

// ** Custom Components Import
import InputField from './landingInput'
import BasicDropdown from './landingdropdown'
import IconButton from 'src/@core/components/icon-button'
import Translations from 'src/@core/components/translations'

// ** Mock data Imports
import { stageData } from 'src/mock/data'

const LandingForm = () => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <Stack className='flex-row md:px-8 px-4 max-md:pt-6 pt-4 pb-4 items-center justify-center gap-4 rounded-3xl bg-white max-md:flex-col md:w-fit w-full'>
      <Box className='w-56 max-lg:w-36 max-lg:font-normal max-md:w-full '>
        <InputField />
      </Box>
      <Divider orientation={matches ? 'vertical' : 'horizontal'} className={matches ? '' : 'w-full'} />
      <BasicDropdown className='w-64 flex gap-6 max-lg:w-36 max-lg:font-normal max-md:w-full' optionData={stageData}>
        <Translations text='Construction Stage' />
      </BasicDropdown>
      <Divider orientation={matches ? 'vertical' : 'horizontal'} className={matches ? '' : 'w-full'} />
      <BasicDropdown className='w-64 flex gap-6 max-lg:w-36 max-lg:font-normal max-md:w-full' optionData={stageData}>
        <Translations text='Price' />
      </BasicDropdown>
      <Divider orientation={matches ? 'vertical' : 'horizontal'} className={matches ? '' : 'w-full'} />
      <IconButton className='w-10 bg-growingnature rounded-xl max-md:w-full '>
        <BiSearchAlt className='w-5 h-5 max-sm:w-6 max-sm:h-6' />
        <Typography className='md:hidden text-white text-14'>SEARCH</Typography>
      </IconButton>
    </Stack>
  )
}

export default LandingForm
