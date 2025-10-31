// ** Next Imports
import Image from 'next/image'
import { useEffect } from 'react'

// ** MUI Imports
import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material'

// ** Gsap Import
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'

// ** Config Import
import { propertyAnimation } from 'src/configs/gsap'

// ** Util Import
import { useSelector } from 'src/store'

// ** Mock Import
import { propertyData, darkPropertyData, frameData } from 'src/mock/data'

// ** Translation Import
import Translations from 'src/@core/components/translations'
import FrameCard from './framecard'

// ** Image Imports
import illustration from '../../../public/img/Illustration.png'
import illustrationDark from '../../../public/img/Illustration-dark.png'

gsap.registerPlugin(ScrollTrigger)

const Property = () => {
  const { theme } = useSelector(store => store.setting)

  useEffect(() => {
    gsap.timeline(propertyAnimation).fromTo('.frame1', { opacity: 0, x: -500 }, { opacity: 1, x: 0 })
    gsap.timeline(propertyAnimation).fromTo('.frame2', { opacity: 0, x: 1200 }, { opacity: 1, x: 0 })
    gsap.timeline(propertyAnimation).fromTo('.property-home', { opacity: 0, x: 1200 }, { opacity: 1, x: 0 })
    gsap.timeline(propertyAnimation).fromTo('.property-right-1', { opacity: 0, x: 1200 }, { opacity: 1, x: 0 })
    gsap
      .timeline(propertyAnimation)
      .fromTo('.property-right-2', { opacity: 0, x: 1200 }, { opacity: 1, x: 0, delay: 0.5 })
    gsap
      .timeline(propertyAnimation)
      .fromTo('.property-right-3', { opacity: 0, x: 1200 }, { opacity: 1, x: 0, delay: 1 })
    gsap
      .timeline(propertyAnimation)
      .fromTo('.property-right-4', { opacity: 0, x: 1200 }, { opacity: 1, x: 0, delay: 1.5 })
    gsap.timeline(propertyAnimation).fromTo('.property-investment', { opacity: 0 }, { opacity: 1, delay: 2 })
  }, [])

  return (
    <Box className='w-full dark:bg-libertyblue bg-zhenzhubai transition-all duration-300 overflow-hidden property'>
      <Stack direction='row' className='container mx-auto justify-between flex-wrap py-100'>
        <Box className='lg:w-calc-50-minus-50 w-full bg-white dark:bg-midnightExpress relative h-550 rounded-lg border border-brightgrey p-10 max-sm:p-6 flex flex-col justify-end lg:mb-0 mb-10'>
          <Box className='overflow-hidden absolute right-0 top-0'>
            {theme ? (
              <Image src={illustrationDark} alt='illustration' className='property-home' />
            ) : (
              <Image src={illustration} alt='illustration' className='property-home' />
            )}
          </Box>
          <Box className='w-full z-10 property-investment'>
            <Typography
              variant='h3'
              className='font-Inter text-shadowdancer dark:text-white text-4xl font-bold mb-4 max-sm:text-24 max-sm:text-blueblouse'
            >
              <Translations text='Property Investment Accessible for Everyone' />
            </Typography>
            <Typography className='font-Inter text-shadowdancer dark:text-blueblouse text-base font-normal max-sm:text-blueblouse'>
              <Translations text='Find your dream place to live in with more than 10k+ properties listed.' />
            </Typography>
            <Button className='mt-6 px-4 text-white bg-growingnature text-base normal-case font-Inter font-medium rounded-lg'>
              <Translations text='Learn More' />
            </Button>
          </Box>
          {frameData.map((item, index) => (
            <FrameCard
              key={index + item.content}
              content={item.content}
              imgUrl={item.imgUrl}
              className={item.className}
            />
          ))}
        </Box>
        <Stack direction='column' spacing={1} className='lg:w-calc-50-minus-50'>
          <Stack direction='column' spacing={1} className='property-right-1'>
            <Typography
              variant='h3'
              className='font-Inter sm:text-6xl text-4xl font-semibold text-mysteriousdepths dark:text-white w-11/12 m-0'
            >
              <Translations text='Find a property to invest in' />
            </Typography>
            <Typography className='font-content text-blueblouse text-lg font-medsium max-sm:text-18'>
              <Translations text='Discover the best deals in three steps' />
            </Typography>
          </Stack>
          <List className='w-full flex flex-col gap-6 p-0'>
            {(theme ? darkPropertyData : propertyData).map((item, idx) => (
              <ListItem
                key={idx + item.title}
                className={`w-full cursor-pointer py-4 flex flex-row gap-6 p-0 property-right-${idx + 2}`}
              >
                <Image src={item.url} alt='property' className='w-16 h-16' />
                <Box className='flex-1 flex flex-col gap-2'>
                  <Typography className='font-Inter text-2xl font-bold text-midnightexpress dark:text-white max-sm:text-24'>
                    <Translations text={item.title} />
                  </Typography>
                  <Typography className='font-Inter text-base text-blueblouse font-normal max-sm:text-16'>
                    <Translations text={item.content} />
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Property
