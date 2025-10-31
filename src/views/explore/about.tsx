// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Stack, Typography } from '@mui/material'

// ** Icons Import
import { MdOutlineBed } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io5'
import { TbSquareRotated } from 'react-icons/tb'
import { AiFillFlag } from 'react-icons/ai'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

// ** Custom Components Import
import GoogleMapComponent from 'src/@core/components/google-map/Map'
import Translations from 'src/@core/components/translations'

// ** Type Imports
import { AboutPropertyProps } from 'src/types'

// ** Mock data Imports
import { aboutContent, villaData } from 'src/mock/data'

const AboutProperty = ({ beds, bathrooms, square, location }: AboutPropertyProps) => {
  const features = [
    { icon: <MdOutlineBed className='text-growingnature' />, label: `${beds} Beds` },
    { icon: <BiBath className='text-growingnature' />, label: `${bathrooms} Bathrooms` },
    { icon: <TbSquareRotated className='text-growingnature' />, label: `${square} m²` }
  ]
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Stack direction='column' className='py-4 gap-4 mb-6'>
      <Typography component='h6' className='font-Inter text-xl font-semibold text-sambucus dark:text-white'>
        <Translations text='About Property' />
      </Typography>
      <Stack direction='row' className=' gap-4 flex-wrap'>
        {features.map((feature, index) => (
          <Typography
            key={index + feature.label}
            className='rounded-full bg-creamyavocardo dark:bg-brightcreamy font-Inter px-4 py-2 flex flex-row gap-2 items-center text-black dark:text-white'
          >
            {feature.icon}
            {feature.label}
          </Typography>
        ))}
      </Stack>
      <Typography className='font-Inter text-base font-normal text-saltboxblue leading-6'>{aboutContent}</Typography>
      <Button className='w-fit font-Inter text-base text-growingnature underline font-semibold normal-case px-0'>
        <Translations text='Read more.' />
      </Button>
      <Stack direction='column' className='gap-1'>
        <Typography component='h6' className='font-Inter text-xl font-semibold text-sambucus dark:text-white'>
          <Translations text='Management' />
        </Typography>
        <Typography className='font-Inter font-normal text-base leading-6 text-saltboxblue'>
          <Translations text='To optimize the returns, Villa Blue Water will be directly managed by GORO Villa Management.' />
        </Typography>
      </Stack>
      <Stack direction='column' className='gap-1'>
        <Typography component='h6' className='font-Inter text-xl font-semibold text-sambucus dark:text-white'>
          <Translations text='Exit Strategy' />
        </Typography>
        <Typography className='font-Inter font-normal text-base leading-6 text-saltboxblue'>
          <Translations text='The villa will be sold once the leasehold reaches 25 years remaining (March 2029).' />
        </Typography>
      </Stack>
      <Box className='mt-4 h-48'>
        <GoogleMapComponent location={location} zoom={12} />
      </Box>
      <Stack
        direction='column'
        className='w-full border-brightgrey dark:border-crowblack border-t border-solid border-l-0 border-r-0 border-b-0'
      >
        {villaData.map(({ id, title, content }) => (
          <Accordion
            key={`index${id}`}
            expanded={expanded === id}
            onChange={handleChange(id)}
            className='shadow-none no-before transition-all duration-300 bg-white border-t border-b-0 border-l-0 border-r-0 border-solid border-brightgrey dark:bg-libertyblue dark:border-crowblack'
          >
            <AccordionSummary
              expandIcon={
                expanded === id ? (
                  <FaAngleUp size={20} className='text-saltboxblue' />
                ) : (
                  <FaAngleDown size={20} className='text-saltboxblue' />
                )
              }
              aria-controls={`${id}-content`}
              id={`${id}-header`}
              className='px-0 '
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
        <Divider className='w-full bg-brightgrey dark:bg-crowblack' />

        <Stack direction='row' className='justify-between items-center py-4'>
          <Typography className='font-Inter text-14 dark:text-white text-black'>
            <Translations text='Created on November 2nd, 2023' />
          </Typography>
          <IoLocationOutline className='w-6 h-6 dark:text-white text-black' />
        </Stack>
        <Divider className='w-full bg-brightgrey dark:bg-crowblack' />
        <Stack direction='row' className='pt-4 gap-1 items-center justify-start'>
          <AiFillFlag className='w-4 dark:text-white text-black' />
          <Typography className=' text-14 font-Inter items-center dark:text-white text-black'>
            <Translations text='Denunciar esta campanha' />
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AboutProperty
