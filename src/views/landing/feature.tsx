// ** React Imports
import { useEffect } from 'react'

// ** MUI Imports
import { Box, Typography } from '@mui/material'

// ** Gsap Imports
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'

// ** Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

// ** useMediaQuery Imports
import { useMediaQuery } from 'react-responsive'

// ** Config Importss
import config from 'src/configs'

// ** Config imports
import { featureAnimation } from 'src/configs/gsap'
import { cardData } from 'src/mock/data'

// ** Custom Components imports
import Translations from 'src/@core/components/translations'
import Card from '../component/Card'

gsap.registerPlugin(ScrollTrigger)

const Feature = () => {
  const isExtraLarge = useMediaQuery({ minWidth: 1500 })
  const isLarge = useMediaQuery({ minWidth: 1200 })
  const isMedium = useMediaQuery({ minWidth: 768 })
  const slidesToShow = isExtraLarge ? 4 : isLarge ? 3 : isMedium ? 2 : 1
  useEffect(() => {
    gsap.timeline(featureAnimation).fromTo('.feature-slider', { opacity: 0, y: 500 }, { opacity: 1, y: 0 })
  }, [])

  return (
    <Box className='feature w-full dark:bg-libertyblue bg-zhenzhubai transition-all duration-300'>
      <Box className='container mx-auto py-100'>
        <Typography className='font-Inter text-4xl font-semibold text-mysteriousdepths dark:text-white mb-10'>
          <Translations text='Featured Properties' />
        </Typography>
        <Box className='feature-slider'>
          <Swiper
            slidesPerView={slidesToShow}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
            loop={true}
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}

export default Feature
