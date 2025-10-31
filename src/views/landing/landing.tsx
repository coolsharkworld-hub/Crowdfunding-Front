// ** React Imports
import { useEffect, useRef, useState } from 'react'

// ** MUI Imports
import { Box, Stack, Typography } from '@mui/material'

// ** Three.js Imports
import { Canvas, PrimitiveProps, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { DoubleSide, MeshBasicMaterial, NoToneMapping } from 'three'

// ** Gsap Import
import gsap from 'gsap-trial'

// ** Animation Imports
import { motion } from 'framer-motion'

// ** Util Import
import { useSelector } from 'src/store'

// ** Custom components Import
import Button from 'src/@core/components/button'
import LandingForm from '../component/LandingForm'
import BgAnimation from 'src/@core/components/bg-animation'
import Translations from 'src/@core/components/translations'

const HouseModel = ({ path }: { path: string }) => {
  const ref = useRef<PrimitiveProps | null>(null)
  const [done, setDone] = useState(false)
  const gltf = useGLTF(path)

  const bakedTexture = useTexture('/model/baked.jpg')
  bakedTexture.flipY = false
  const bakedMaterial = new MeshBasicMaterial({
    map: bakedTexture,
    side: DoubleSide
  })

  const model = gltf.scene
  model.traverse((child: any) => (child.material = bakedMaterial))

  useThree(({ camera }) => {
    camera.position.y = 4
    camera.position.x = 1
    camera.position.z = 4
  })

  useFrame(() => {
    if (ref.current === null) return
    if (ref.current.rotation.y >= 0.3) {
      setDone(true)
    }
    if (ref.current.rotation.y <= -1) {
      setDone(false)
    }
    if (ref.current.rotation.y < 0.5 && !done) {
      ref.current.rotation.y += 0.001
    } else {
      ref.current.rotation.y -= 0.001
    }
  })

  return <primitive ref={ref} object={model} />
}

const Landing = () => {
  const { theme } = useSelector(state => state.setting)

  useEffect(() => {
    gsap.fromTo('.landing-1', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, delay: 0.5 })
    gsap.fromTo('.landing-2', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, delay: 0.7 })
  }, [])

  return (
    <Stack className={`w-full gap-12 relative landing landing-${theme ? 'dark' : 'light'}`}>
      <BgAnimation />
      <Canvas gl={{ antialias: true, toneMapping: NoToneMapping }} linear>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <HouseModel path='/model/model.glb' />
        <OrbitControls />
      </Canvas>

      <Stack className='absolute left-0 right-0 bottom-0 top-0 pt-20 items-center'>
        <Stack className='landing-1 w-2/3 items-center gap-4 justify-center relative max-md:w-full'>
          <Typography className='font-Inter text-base text-midnightexpress font-normal max-sm:text-14 px-4 py-2 bg-creamyavocardo rounded-full w-fit'>
            <Translations text='Welcome to' />
            &nbsp;
            <Typography component='strong' className='font-semibold ml-1'>
              RWA Estate
            </Typography>
          </Typography>
          <Box className='w-full font-Inter text-6xl font-bold text-mysteriousdepths dark:text-white text-center max-md:text-30 max-md:w-90p leading-tight'>
            <Translations text='Explore' />
            &nbsp;&&nbsp;
            <strong className='relative'>
              <Translations text='Invest' />
              <Box className='absolute invest-underline-first' />
              <Box className='absolute invest-underline-second' />
              <Box className='absolute invest-underline-third' />
            </strong>
            &nbsp;
            <Translations text='in Fractional Ownership of Properties' />
          </Box>
          <Typography className='font-content text-mysteriousdepths dark:text-white text-lg font-medium leading-7 text-center w-2/3 max-sm:text-14 max-sm:font-Inter'>
            <Translations text='landing-description' />
          </Typography>
          <Box>
            <Box
              component={motion.span}
              className='absolute left-first bottom-12p right-85p shiny'
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </Box>
          <Box className='absolute left-second bottom-2p right-83p shiny' />
          <Box className='absolute left-third bottom-0 right-79p shiny' />
          <Box className='absolute right-first bottom-0 left-78p shiny' />
          <Box className='absolute right-second bottom-2p left-82p shiny' />
          <Box className='absolute right-third bottom-12p left-85p shiny' />
        </Stack>
        <Stack className='landing-2 w-full items-center gap-4 justify-center mt-28 max-lg:mt-8 max-md:mt-3 max-sm:mt-6 max-sm:w-full px-6'>
          <Stack direction='row' className='gap-2 items-center justify-center'>
            <Button rounded='rounded-full' className='rounded-full uppercase px-6 py-2.5'>
              <Translations text='property' />
            </Button>
            <Button rounded='rounded-full' className='rounded-full uppercase px-6 py-2.5'>
              <Translations text='land' />
            </Button>
            <Button rounded='rounded-full' className='rounded-full uppercase px-6 py-2.5'>
              <Translations text='commercials' />
            </Button>
          </Stack>
          <LandingForm />
        </Stack>
      </Stack>
    </Stack>
  )
}

useGLTF.preload('/model/model.glb')
useTexture.preload('/model/baked.jpg')

export default Landing
