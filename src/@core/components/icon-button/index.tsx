import { ButtonProps, IconButton as MuiIconButon } from '@mui/material'

const IconButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <MuiIconButon
      className={`h-10 border-3 border-solid bg-whiteedgar border-cascadingwhite hover:bg-creamyavocardo dark:hover:bg-creamyavocardo dark:hover:text-midnightexpress hover:border-milkfoam transition-all duration-300 text-saltboxblue hover:text-midnightExpress dark:text-white dark:bg-bluezodiac dark:border-crowblack ${className}`}
      {...props}
    >
      {children}
    </MuiIconButon>
  )
}

export default IconButton
