// ** React Imports
import { ChangeEvent } from 'react'

// ** MUI Imports
import { Pagination as MuiPagination, Stack, Button } from '@mui/material'

// ** Icon Imports
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

// ** Util Imports
import { useSelector } from 'src/store'

// ** Custom Component
import Translations from '../translations'

interface Props {
  count: number
  pageSize: number
  page: number
  setPage: (page: number) => void
}

const Pagination = ({ count, pageSize, page, setPage }: Props) => {
  const { theme } = useSelector(store => store.setting)

  // ** State

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handlePrevious = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  const handleNext = () => {
    if (page === 10) return
    setPage(page + 1)
  }

  return (
    <Stack direction='row' justifyContent='space-between'>
      <Button
        disableRipple
        onClick={handlePrevious}
        className='capitalize text-rainmaker gap-2 dark:text-white font-Inter'
        variant='text'
      >
        <GrLinkPrevious />
        <Translations text='Previous' />
      </Button>
      <MuiPagination
        className='dark:text-white'
        sx={{
          '& .MuiButtonBase-root': {
            backgroundColor: theme ? '#3A4355' : '',
            color: theme ? 'white' : ''
          },
          '& button.Mui-selected': {
            backgroundColor: theme ? '#D9F99D' : '',
            color: theme ? '#1D273A' : ''
          },
          '& .Mui-selected:hover': {
            backgroundColor: theme ? '#D9F99D' : '',
            color: theme ? '#1D273A' : ''
          },
          '& .MuiPaginationItem-ellipsis': {
            color: theme ? 'white' : ''
          }
        }}
        count={Math.ceil(count / pageSize)}
        page={page}
        onChange={handleChange}
        hideNextButton
        hidePrevButton
      />
      <Button
        disableRipple
        onClick={handleNext}
        className='capitalize text-rainmaker gap-2 dark:text-white font-Inter'
        variant='text'
      >
        <Translations text='Next' />
        <GrLinkNext />
      </Button>
    </Stack>
  )
}

export default Pagination
