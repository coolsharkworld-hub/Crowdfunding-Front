// ** React Imports
import { useState, useEffect, useRef } from 'react'

// ** MUI Imports
import { Box, List, ListItem, Typography } from '@mui/material'

// ** Type Imports
import { BasicDropdownProps } from 'src/types'

const BasicDropdown = ({ children, optionData, className = '' }: BasicDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Box className='relative text-left max-md:w-full' ref={dropdownRef}>
      <button
        type='button'
        className={`inline-flex justify-between font-Inter border-none leading-6 text-saltboxblue border-gray-300 px-4 py-2 bg-white text-sm 
            font-medium text-gray-700 focus:outline-none max-md:w-full max-md:justify-between${className}`}
        id='options-menu'
        aria-expanded='true'
        aria-haspopup='true'
        onClick={toggleDropdown}
      >
        {selectedOption ?? children}
        <svg
          className='-mr-1 ml-2 h-5 w-5'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen && (
        <Box className='origin-top-right absolute left-0 mt-2 w-f4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 max-md:w-full'>
          <Box className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            <List className='w-full'>
              {optionData.map((item, index) => (
                <ListItem key={`index${index}`} className='w-full' onClick={() => handleOptionClick(item)}>
                  <Typography
                    className='block px-4 py-2 font-Inter text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:bg-creamyavocardo '
                    role='menuitem'
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default BasicDropdown
