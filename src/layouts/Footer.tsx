// ** React Imports
import { memo, useEffect } from 'react'

// ** Next Imports
import Image from 'next/image'
import Link from 'next/link'

// ** MUI Imports
import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material'

// ** Gsap Imports
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'

// ** Mock data Imports
import { footerMenuItems } from 'src/mock/data'

// ** Config Imports
import { footerAnimation } from 'src/configs/gsap'

// ** Custom components Imports
import Translations from 'src/@core/components/translations'

// ** Image Imports
import logoImg from '../../public/img/logo.png'
import FooterBg from '../../public/img/footer/footer6.png'
import FooterRight1 from '../../public/img/footer/footer11.png'
import FooterRight2 from '../../public/img/footer/footer7.png'
import FooterArrow1 from '../../public/img/footer/footer8.png'
import FooterArrow2 from '../../public/img/footer/footer9.png'
import FooterTree from '../../public/img/footer/footer1.png'
import FooterTree2 from '../../public/img/footer/footer4.png'
import FooterHome from '../../public/img/footer/footer2.png'
import FooterBar from '../../public/img/footer/footer5.png'
import FooterLeft from '../../public/img/footer/footer10.png'
import FooterChair from '../../public/img/footer/footer3.png'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  useEffect(() => {
    gsap.timeline(footerAnimation).fromTo('.footer-bg--img', { opacity: 0 }, { opacity: 1 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.circle--img', { opacity: 0, scale: 0 }, { delay: 0.5, opacity: 1, scale: 1 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.home--img', { opacity: 0, scale: 0, y: -300 }, { delay: 1, opacity: 1, scale: 1, y: 0 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.tree--img', { opacity: 0, scale: 0, y: -300 }, { delay: 2, opacity: 1, scale: 1, y: 0 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.tree2--img', { opacity: 0, scale: 0, y: -300 }, { delay: 3, opacity: 1, scale: 1, y: 0 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.grass--img', { opacity: 0, scale: 0, y: 300 }, { delay: 4, opacity: 1, scale: 1, y: 0 })
    gsap.timeline(footerAnimation).fromTo('.invest--img', { opacity: 0, scale: 0 }, { delay: 5, opacity: 1, scale: 1 })
    gsap.timeline(footerAnimation).fromTo('.chair--img', { opacity: 0, scale: 0 }, { delay: 6, opacity: 1, scale: 1 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.mountain--img', { opacity: 0, scale: 0, x: 300 }, { delay: 7, opacity: 1, scale: 1, x: 0 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.arrow--img', { opacity: 0, scale: 0, x: 300 }, { delay: 7.5, opacity: 1, scale: 1, x: 0 })
    gsap
      .timeline(footerAnimation)
      .fromTo('.arrow2--img', { opacity: 0, scale: 0, x: 300 }, { delay: 7.6, opacity: 1, scale: 1, x: 0 })
  }, [])

  return (
    <Box component='footer' className='w-full pt-16 gap-8 bg-midnightexpress flex flex-col overflow-hidden'>
      <Box className='container mx-auto pr-25p'>
        <Box className='flex flex-row max-sm:flex-col max-sm:items-center lg:justify-between font-content flex-wrap lg:flex-nowrap justify-start'>
          {footerMenuItems.map((list, index) => (
            <List
              key={`index${index}`}
              className='flex flex-col text-white gap-3 lg:w-calc-20-minus-25 md:w-1/3 max-sm:w-2/3 w-1/2 md:mb-0 mb-10 max-sm:items-center'
            >
              {list.map((item, i) =>
                !(index === 1 && i === 2) ? (
                  <ListItem
                    key={`key${i}`}
                    className={`text-base font-medium font-Inter hover:text-growingnature transition-colors duration-300 ease-in-out transform cursor-pointer list-none ${
                      i === 0 ? 'mb-1' : ''
                    }`}
                  >
                    <Translations text={item} />
                  </ListItem>
                ) : (
                  <ListItem
                    key={`key${index}-${i}`}
                    className='flex gap-2 text-base font-medium font-Inter items-center hover:text-growingnature transition-colors duration-300 ease-in-out transform cursor-pointer'
                  >
                    <Translations text={item} />
                  </ListItem>
                )
              )}
            </List>
          ))}
        </Box>
        <Divider className='bg-saltboxblue mt-16' />
        <Box className='pt-8 flex justify-between border-t gap-4 border-none md:flex-row flex-col max-md: items-center'>
          <Stack component={Link} href='/' direction='row' className='items-center no-underline'>
            <Image src={logoImg} alt='logo' className='mr-2 w-fit h-fit' />
            <Typography className='font-Inter text-2xl text-white font-bold flex flex-row max-sm:text-22'>
              <Translations text='RWA' />
              &nbsp;
            </Typography>
            <Typography className='font-Inter text-2xl text-white font-normal flex flex-row max-sm:text-22'>
              <Translations text='Estate' />
            </Typography>
          </Stack>
          <Typography className='font-normal text-base text-saltboxblue text-12 font-content'>
            <Translations text='© 2024 RWA Estate. All rights reserved.' />
          </Typography>
        </Box>
      </Box>
      <Box className='w-full relative pt-10 pb-0 img-group'>
        <Box className='w-4/5 pt-15p' />
        <Box className='absolute right-0 bottom-0 left-0 footer-bg--img'>
          <Image src={FooterBg} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute right-0 bottom-0 left-80p mountain--img'>
          <Image src={FooterRight1} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute right-0 bottom-10 left-85p arrow2--img'>
          <Image src={FooterArrow2} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute right-0 bottom-24 left-85p arrow--img'>
          <Image src={FooterArrow1} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute right-10p bottom-0 left-75p grass--img'>
          <Image src={FooterRight2} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute left-10p bottom-0 right-80p tree--img'>
          <Image src={FooterTree} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute left-32p bottom-0 right-65p circle--img'>
          <Image src={FooterLeft} alt='footer-bg' className='w-full h-auto ' />
        </Box>
        <Box className='absolute left-15p bottom-0 right-55p home--img'>
          <Image src={FooterHome} alt='footer-bg' className='w-full h-auto' />
        </Box>

        <Box className='absolute left-35p bottom-0 right-55p tree2--img'>
          <Image src={FooterTree2} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute left-50p bottom-0 right-40p invest--img'>
          <Image src={FooterBar} alt='footer-bg' className='w-full h-auto' />
        </Box>
        <Box className='absolute left-46p bottom-0 right-50p chair--img'>
          <Image src={FooterChair} alt='footer-bg' className='w-full h-auto' />
        </Box>
      </Box>
    </Box>
  )
}

export default memo(Footer)
