// ** React Imports
import { SyntheticEvent, useState, useEffect } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Stack,
  Typography,
  SvgIcon
} from '@mui/material'

// ** Gsap Imports
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'

// ** Icon Imports
import { FiPlus, FiMinus } from 'react-icons/fi'

// ** Mock Imports
import { accordionData } from 'src/mock/data'

// ** Hook Imports
import { useSelector } from 'src/store'

// ** Component Imports
import Translations from 'src/@core/components/translations'

// ** Images Import
import FaqAvatar from '../../../public/img/njmber.png'
import Customer from '../../../public/img/customer.png'
import Icon1 from '../../../public/img/group1.svg'
import Icon2 from '../../../public/img/group2.svg'
import Icon3 from '../../../public/img/group3.svg'
import Icon4 from '../../../public/img/group4.svg'

import { faqAnimation, faqAnimation2 } from 'src/configs/gsap'

gsap.registerPlugin(ScrollTrigger)

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const { theme } = useSelector(store => store.setting)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    gsap.timeline(faqAnimation).fromTo('.faq-accordion', { opacity: 0, x: -1000 }, { opacity: 1, x: 0 })
    gsap.timeline(faqAnimation2).fromTo('.faq-avatar', { opacity: 0, x: 1000 }, { opacity: 1, x: 0 })
    gsap.timeline(faqAnimation2).fromTo('.faq-text', { opacity: 0, x: 1000 }, { opacity: 1, x: 0, delay: 0.5 })
    gsap.timeline(faqAnimation2).fromTo('.faq-customer', { opacity: 0, y: 1000 }, { opacity: 1, y: 0, delay: 1 })
    gsap.timeline(faqAnimation2).fromTo('.faq-customer-bg', { opacity: 0, y: 1000 }, { opacity: 1, y: 0, delay: 1 })
    gsap.timeline(faqAnimation2).fromTo('.faq-icons', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, delay: 5 })
  }, [])

  return (
    <Box className='bg-white dark:bg-libertyblue transition-all duration-300 overflow-hidden faq'>
      <Stack className='container mx-auto py-150 md:flex-row justify-between'>
        <Box className='faq-accordion md:w-48p w-full'>
          <Stack direction='row' className='justify-between mb-4'>
            <Typography className='font-Inter dark:text-white text-black font-semibold text-4xl'>
              <Translations text='FAQs' />
            </Typography>
            <IconButton className='h-10 rounded-lg border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack font-Inter font-medium text-base max-md:hidden'>
              <Translations text='Show more' />
            </IconButton>
          </Stack>
          {accordionData.map(({ id, title, content }) => (
            <Accordion
              key={`index${id}`}
              expanded={expanded === id}
              onChange={handleChange(id)}
              className={`mb-4 shadow-sm rounded-xl px-2 no-before transition-all duration-300 ${expanded === id ? 'bg-white border border-solid border-brightgrey dark:bg-kon dark:border-crowblack' : 'bg-brightgrey dark:bg-kon dark:border-crowblack'}`}
            >
              <AccordionSummary
                expandIcon={
                  expanded === id ? (
                    <FiMinus size={20} className='text-saltboxblue' />
                  ) : (
                    <FiPlus size={20} className='text-saltboxblue' />
                  )
                }
                aria-controls={`${id}-content`}
                id={`${id}-header`}
              >
                <Typography className='font-Inter text-xl font-semibold text-sambucus dark:text-white'>
                  <Translations text={title} />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='font-Inter text-base font-normal text-saltboxblue'>
                  <Translations text={content} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <IconButton className='w-full h-10 rounded-lg border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack font-Inter font-medium text-base md:hidden mt-2'>
            <Translations text='Show more' />
          </IconButton>
        </Box>
        <Stack direction='column' className='faq2 md:w-48p w-full relative gap-10'>
          <Stack direction='column' className='mx-auto gap-14 items-center w-290'>
            <Image src={FaqAvatar} alt='faq-avatar' className='faq-avatar' />
            <Typography className='faq-text font-Inter text-5xl font-bold text-midnightexpress dark:text-white text-center'>
              <Translations text='Looking for an answers?' />
            </Typography>
          </Stack>
          <Stack className='relative justify-center items-center '>
            <Box className='w-fit h-fit relative  px-50 py-2'>
              <Box className='faq-customer relative z-10'>
                <Image src={Customer} alt='customer-avatar' className='mx-auto relative z-30 w-full' />
              </Box>
              <Box className='faq-customer-bg bg-growingnature dark:bg-growingnature rounded-b-full absolute top-1/2 bottom-0 left-0 right-0' />
              <SvgIcon
                viewBox='0 0 50 51'
                sx={{
                  '& path': {
                    stroke: theme ? 'white' : 'midnightexpress',
                    fill: theme ? 'white' : 'midnightexpress'
                  }
                }}
                component={Icon1}
                className='faq-icons absolute left-30p top-0 icon3'
              />
              <SvgIcon
                viewBox='0 0 28 29'
                sx={{
                  '& path': {
                    stroke: theme ? 'white' : 'midnightexpress',
                    fill: theme ? 'white' : 'midnightexpress'
                  }
                }}
                component={Icon2}
                className='faq-icons absolute right-0 top-0 icon4'
              />
              <SvgIcon
                viewBox='0 0 28 29'
                sx={{
                  '& path': {
                    stroke: theme ? 'white' : 'midnightexpress',
                    fill: theme ? 'white' : 'midnightexpress'
                  }
                }}
                component={Icon2}
                className='faq-icons absolute right-6 top-20p icon5'
              />
              <SvgIcon
                viewBox='0 0 28 29'
                sx={{
                  '& path': {
                    stroke: theme ? 'white' : 'midnightexpress',
                    fill: theme ? 'white' : 'midnightexpress'
                  }
                }}
                component={Icon2}
                className='faq-icons absolute right-0 top-80p icon6'
              />
              <SvgIcon
                viewBox='0 0 152 139'
                sx={{
                  '& path': {
                    stroke: theme ? 'white' : 'midnightexpress',
                    fill: theme ? 'transparent' : 'transparent'
                  }
                }}
                component={Icon3}
                className='faq-icons absolute left-0 top-0 icon1'
              />
              <SvgIcon
                viewBox='0 0 62 73'
                sx={{
                  '& path': {
                    stroke: theme ? 'white' : 'midnightexpress',
                    fill: theme ? 'white' : 'midnightexpress '
                  }
                }}
                component={Icon4}
                className='faq-icons absolute left-0 bottom-0 icon2'
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Faq
