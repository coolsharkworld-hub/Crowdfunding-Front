// ** React imports
import React, { MouseEvent, useContext, useEffect, useState } from 'react'

// ** MUI Imports
import { Box, Container, Divider, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

// ** Icon imports
import { RiGalleryView2 } from 'react-icons/ri'
import { IoArrowDownSharp, IoArrowUpSharp, IoLocationOutline } from 'react-icons/io5'

// ** Config imports
import config from 'src/configs'

// ** Types imports
import { PropertyData } from 'src/types'

// ** API imports
import { fetchAssets } from 'src/api'

// ** Hooks imports
import { LoadingContext } from 'src/context/LoadingContext'

// ** Custom Components imports
import Button from 'src/@core/components/button'
import Pagination from 'src/@core/components/pagination'
import Translations from 'src/@core/components/translations'
import GoogleMapComponent from 'src/@core/components/google-map/Map'
import Card from 'src/views/component/Card'

const pageSize = 6

const Explore = () => {
  const { setLoading } = useContext(LoadingContext)
  const [alignment, setAlignment] = useState('Price')
  const [manage, setManage] = useState<'Gallery' | 'Maps'>('Gallery')
  const [data, setData] = useState<PropertyData[]>([])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(1)

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await fetchAssets(page, pageSize, alignment)
      setData(data.assets)
      setCount(data.count)
    } catch (error) {
      console.error('Error verifying wallet:', error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [alignment, page])

  return (
    <Box className='dark:bg-libertyblue'>
      <Stack component={Container} className='gap-8 py-6'>
        <Stack alignItems='center' justifyContent='space-between' className='max-2lg:flex-col gap-4' direction='row'>
          <Stack className='flex-1 max-2lg:items-center'>
            <Typography variant='h4' className='font-Inter text-3xl font-semibold text-sambucus dark:text-white'>
              <Translations text='Explore' />
            </Typography>
            <Typography className='font-content text-base font-normal text-rainmaker dark:text-blueblouse'>
              <Translations text='Where do you want to help' />
            </Typography>
          </Stack>
          <Stack alignItems='center' direction='row' className='gap-4'>
            <Stack alignItems='center' direction='row' className='gap-3'>
              <Button
                className='hover:dark:text-midnightexpress hover:dark:border-freinachtblack gap-1'
                onClick={() => setManage('Gallery')}
              >
                <RiGalleryView2 />
                <Translations text='Gallery' />
              </Button>
              <Button
                className='hover:dark:text-midnightexpress hover:dark:border-freinachtblack gap-1'
                onClick={() => setManage('Maps')}
              >
                <IoLocationOutline />
                <Translations text='Maps' />
              </Button>
            </Stack>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label='Platform'
              className='h-10 max-md:hidden dark:bg-bluezodiac'
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
          </Stack>
        </Stack>
        {manage == 'Maps' ? (
          <Stack className='w-full flex-row gap-6 max-2lg:flex-col-reverse'>
            <Stack className='w-1/3 gap-4 justify-between flex-wrap md:min-w-96 max-2lg:w-full h-fit'>
              {data.map((item, index) => (
                <Card
                  propertyPrice={item.propertyPrice}
                  key={index}
                  shape='portrait'
                  imgUrl={`${config.mediaUrl}/${item.image}`}
                  address={item.name}
                  street={item.location}
                  price={item.price}
                  id={item._id}
                  cardInfo={{
                    token: 2300,
                    IRP: item.irr,
                    APR: item.apr,
                    valueGrowth: item.growth,
                    minInverstment: 120
                  }}
                  tokenAvailable={62}
                  ribbonflag={index % 3 == 0}
                />
              ))}
            </Stack>
            <Stack className='w-2/3 max-2lg:*:w-full max-2lg:w-full max-2lg:h-96 '>
              <GoogleMapComponent location='Paris' zoom={12} />
            </Stack>
          </Stack>
        ) : (
          <Stack className='w-full flex-row gap-6 flex-wrap'>
            {data.map((item, index) => (
              <Box key={index} className='lg:w-calc-33-minus-16 md:w-calc-50-minus-12 w-full'>
                <Card
                  shape='portrait'
                  imgUrl={`${config.mediaUrl}/${item.image}`}
                  address={item.name}
                  street={item.location}
                  price={item.price}
                  propertyPrice={item.propertyPrice}
                  id={item._id}
                  cardInfo={{
                    token: 2300,
                    IRP: item.irr,
                    APR: item.apr,
                    valueGrowth: item.growth,
                    minInverstment: 120
                  }}
                  tokenAvailable={62}
                  ribbonflag={index % 3 == 0}
                />
              </Box>
            ))}
          </Stack>
        )}
        <Divider className='bg-brightgrey dark:bg-crowblack' />
        <Pagination count={count} pageSize={pageSize} page={page} setPage={setPage} />
      </Stack>
    </Box>
  )
}

export default Explore
