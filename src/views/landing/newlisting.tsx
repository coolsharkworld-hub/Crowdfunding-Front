// ** React Imports
import { useEffect, useRef } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import { Box, IconButton, Stack, Typography } from '@mui/material'

// ** React responsive Imports
import { useMediaQuery } from 'react-responsive'

// ** Gsap Imports
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'

// ** Config Imports
import config from 'src/configs'
import { listingAnimation } from 'src/configs/gsap'

// ** Mock data Imports
import { cardData } from 'src/mock/data'

// ** Custom Components imports
import Translations from 'src/@core/components/translations'
import Card from '../component/Card'

// ** Images Imports
import ListingImg1 from '../../../public/img/listing/listing-1.png'
import ListingImg2 from '../../../public/img/listing/listing-2.png'
import ListingImg3 from '../../../public/img/listing/listing-3.png'
import ListingImg4 from '../../../public/img/listing/listing-4.png'

gsap.registerPlugin(ScrollTrigger)
const NewListing = () => {
  const newListRef = useRef<HTMLDivElement | null>(null)
  const listCardRef = useRef<HTMLDivElement | null>(null)
  const showMoreRef = useRef<HTMLButtonElement | null>(null)
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  useEffect(() => {
    if (newListRef.current) {
      gsap.fromTo(
        newListRef.current,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrub: true,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: newListRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    }

    if (listCardRef.current) {
      const cards = listCardRef.current.children
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: listCardRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })

      Array.from(cards).forEach((card, index) => {
        tl.fromTo(
          card,
          { opacity: 0, y: 200 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power1.out'
          },
          index * 0.3
        )
      })
    }

    if (showMoreRef.current) {
      gsap.fromTo(
        showMoreRef.current,
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrub: true,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: showMoreRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    }

    gsap.timeline(listingAnimation).fromTo('.listing-1', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
    gsap.timeline(listingAnimation).fromTo('.listing-2', { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.5 })
    gsap.timeline(listingAnimation).fromTo('.listing-3', { opacity: 0, y: 200 }, { opacity: 1, y: 0, delay: 1 })
    gsap.timeline(listingAnimation).fromTo('.listing-4', { opacity: 0, y: 200 }, { opacity: 1, y: 0, delay: 1.5 })
  }, [])

  return (
    <Box className='w-full dark:bg-libertyblue bg-zhenzhubai transition-all duration-300 overflow-hidden relative new-listing'>
      <Box className='container py-100 mx-auto flex flex-col relative z-10'>
        <Stack direction='row' className='justify-between mb-10'>
          <Typography
            className='font-Inter text-4xl font-semibold text-mysteriousdepths dark:text-white'
            ref={isDesktop ? newListRef : null}
          >
            <Translations text='New Listings' />
          </Typography>
          <IconButton
            className='h-10 rounded-lg border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack font-Inter font-medium text-base max-md:hidden'
            ref={isDesktop ? showMoreRef : null}
          >
            <Translations text='Show more' />
          </IconButton>
        </Stack>
        <Stack direction='row' className='flex-wrap gap-10' ref={isDesktop ? listCardRef : null}>
          {cardData.map((item, index) => (
            <Box key={index + item.name} className='lg:w-calc-33-minus-26 md:w-calc-50-minus-20 w-full'>
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
      </Box>
      <Box className='listing-1 absolute left-10 top-10p'>
        <Image src={ListingImg1} alt='listing-img-1' className='w-13 h-auto' />
      </Box>
      <Box className='listing-2 absolute right-20p top-20'>
        <Image src={ListingImg2} alt='listing-img-2' className='w-15 h-auto' />
      </Box>
      <Box className='listing-3 absolute -right-7 top-30p'>
        <Image src={ListingImg3} alt='listing-img-3' className='w-15 h-auto' />
      </Box>
      <Box className='listing-4 absolute -left-7 top-50p'>
        <Image src={ListingImg4} alt='listing-img-4' className='w-15 h-auto' />
      </Box>
    </Box>
  )
}

export default NewListing
