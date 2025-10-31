// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import { Box, Typography } from '@mui/material'

// ** Icon Imports
import { IoArrowUpSharp } from 'react-icons/io5'

// ** Gsap Imports
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'

// ** Mock Imports
import { priceData } from 'src/mock/data'

// ** Image Imports
import priceNew from '../../../public/img/price-new.png'
import priceImage from '../../../public/img/price-img.png'
import containerImage from '../../../public/img/Container.png'
import { priceAnimation } from 'src/configs/gsap'

gsap.registerPlugin(ScrollTrigger)
const Price = () => {
  useEffect(() => {
    gsap.timeline(priceAnimation).fromTo('.price-house-img', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
    gsap.timeline(priceAnimation).fromTo('.price-house-box', { opacity: 0 }, { opacity: 1, delay: 2 })
  }, [])

  return (
    <Box className='w-full flex dark:bg-libertyblue bg-white transition-all duration-300 relative justify-start price-house'>
      <Image src={containerImage} alt='Container' className='w-full h-auto price-house-img' />
      <Box className='price-house-box'>
        <Image
          src={priceImage}
          alt='Container'
          className='absolute top-35p right-30p scale-price-image max-xl:w-10 max-xl:h-10 max-md:w-5 max-md:h-5'
        />
        <Image
          src={priceNew}
          alt='Container'
          className='absolute top-35p left-25p scale-price-new max-xl:w-10 max-xl:h-10 max-md:w-5 max-md:h-5'
        />
        {priceData.map((card, index) => (
          <Box key={index} className={`${card.position} rounded-full bg-creamyavocardo p-1 flex gap-1 items-center`}>
            <IoArrowUpSharp className={`text-growingnature ${card.arrowSize}`} />
            <Typography className={`font-Inter text-growingnature ${card.priceTextSize}`}>{card.price}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Price
