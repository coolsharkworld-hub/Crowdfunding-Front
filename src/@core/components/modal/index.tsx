import React, { ReactNode, useEffect, useState } from 'react'
import { FiXCircle, FiSave } from 'react-icons/fi'
import { Box, Button, Stack, Typography } from '@mui/material'
import Translations from '../translations'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <Box
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Box
        className={`bg-verifiedblack rounded-lg shadow-lg max-w-3xl w-full p-6 transition-transform duration-300 transform ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <Stack className='w-full max-w-full h-[420px] relative'>{children}</Stack>
        <Box className='mt-4 flex justify-end'>
          <Button
            className='px-4 py-2 bg-growingnature text-white font-Inter rounded-md font-medium leading-6 flex flex-row items-center mr-4'
            onClick={onClose}
          >
            <FiXCircle className='text-lg' />
            <Typography>
              <Translations text='CLOSE' />
            </Typography>
          </Button>
          <Button
            className='px-4 py-2 bg-growingnature text-white font-Inter rounded-md font-medium leading-6 flex flex-row items-center'
            onClick={onSave}
          >
            <FiSave className='text-lg' />
            <Typography>
              <Translations text='SAVE' />
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Modal
