// ** MUI Imports
import { ButtonProps as MuiButtonProps, Button as MuiButton } from '@mui/material'

const Button = ({ children, className, rounded, ...props }: MuiButtonProps & { rounded?: string }) => {
  return (
    <MuiButton
      sx={{ textTransform: 'none' }}
      className={`font-Inter h-10 ${rounded ? rounded : 'rounded-lg'} bg-whiteedgar hover:bg-creamyavocardo dark:bg-bluezodiac dark:hover:bg-creamyavocardo border-3 border-solid border-cascadingwhite hover:border-milkfoam dark:border-crowblack transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:hover:text-midnightexpress ${className}`}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button
