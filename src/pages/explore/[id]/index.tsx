// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import { Box, Breadcrumbs, Button, Divider, Stack, Typography } from '@mui/material'

// ** Icon Imports
import { IoMdHeartEmpty } from 'react-icons/io'
import { FiUpload } from 'react-icons/fi'
import { MdNavigateNext } from 'react-icons/md'

// ** Image-gallery Imports
import ImageGallery from 'react-image-gallery'

// ** Mock data Imports
import { cardInfo, imageData } from 'src/mock/data'

// ** Custom component Imports
import Translations from 'src/@core/components/translations'
import Calculator from 'src/views/explore/calculator'
import Issuer from 'src/views/explore/issuer'
import CardTitle from 'src/views/component/Card/Title'
import CardInfo from 'src/views/component/Card/Info'
import CardProgress from 'src/views/component/Card/Progress'
import PropertyPrice from 'src/views/component/Card/Property'
import AboutProperty from 'src/views/explore/about'

const ExploreDetail = () => {
  return (
    <Box className=' w-full gap-8 dark:bg-libertyblue bg-white min-h-screen'>
      <Stack direction='column' className='container mx-auto py-6'>
        <Stack className='flex-row gap-4 max-md:flex-col mb-2'>
          <Stack direction='column' className='flex-1 gap-2'>
            <Breadcrumbs
              separator={<MdNavigateNext size={24} className='dark:text-blueblouse text-rainmaker' />}
              aria-label='breadcrumb'
            >
              <Link
                key='1'
                href='/explore'
                className='font-Inter text-base text-rainmaker flex flex-row gap-2 font-normal dark:text-blueblouse no-underline'
              >
                <Translations text='Explore' />
              </Link>
              <Typography
                key='2'
                className='font-Inter text-base text-rainmaker flex flex-row gap-2 dark:text-blueblouse font-bold'
              >
                <Translations text='Villia Blue Water' />
              </Typography>
            </Breadcrumbs>
            <Typography
              component='h4'
              className='font-Inter md:text-5xl text-2xl font-semibold text-sambucus leading-10 dark:text-white'
            >
              <Translations text='Villia Blue Water' />
            </Typography>
          </Stack>
          <Stack direction='row' className='md:justify-end justify-start gap-4 items-center'>
            <Button className='px-4 flex gap-1 bg-white hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-crowblack text-midnightexpress shadow-sm !border dark:bg-bluezodiac dark:text-white dark:border-crowblack'>
              <FiUpload />
              <Translations text='Share' />
            </Button>
            <Button className='px-4 flex gap-1 bg-white hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-crowblack text-midnightexpress shadow-sm !border dark:bg-bluezodiac dark:text-white dark:border-crowblack'>
              <IoMdHeartEmpty />
              <Translations text='Like' />
            </Button>
          </Stack>
        </Stack>
        <Stack className='lg:flex-row w-full gap-10 flex-col'>
          <Stack direction='column' className='flex-1'>
            <Stack className='w-full'>
              <ImageGallery
                items={imageData}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={false}
              />
            </Stack>
            <AboutProperty beds={2} bathrooms={3} square={200} location='Paris' />
          </Stack>
          <Stack direction='column' className='lg:w-400 gap-4 w-full'>
            <Stack
              direction='column'
              className='p-4 border border-solid border-brightgrey rounded-xl shadow-sm gap-5 dark:border-crowblack dark:bg-midnightexpress'
            >
              <CardTitle address='Saint-Martin Doranyia  Villas' street='1020 Bloomingdale Ave' shape='portrait' />
              <Divider className='dark:bg-crowblack bg-brightgrey' />
              <PropertyPrice propertyPrice={213230000} tokenPrice={1500} />
              <Divider className='dark:bg-crowblack bg-brightgrey' />
              <Stack direction='column'>
                <CardInfo cardInfo={cardInfo} />
                <CardProgress tokenAvailable={62} />
              </Stack>
            </Stack>
            <Calculator />
            <Issuer />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ExploreDetail
