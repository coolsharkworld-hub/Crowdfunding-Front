import { StaticImageData } from 'next/image'

// ** Type definitions
export type CropperRef = {
  getCanvas: () => HTMLCanvasElement
}

export type Property = {
  title: string
  location: string
  price: string
  priceChange: string
  pricePerSquareFoot: string
  occupancyRate: string
  avatarSrc: string
}

export type PropertyOption = 'all' | 'my'

export type ChartDataOption = 'price' | 'marketcap'

export type FilterOption = 'price' | 'date'

// ** Interface definitions
export interface AspectRatio {
  minimum: number
  maximum: number
}

export interface JSONData {
  contract: string
  name: string
  symbol: string
  kya: string
  minAmount: number
  totalSupply: number
  circulation: number
  location: string
  price: number
  irr: number
  apr: number
  growth: number
  bedroom: number
  bathroom: number
  square: number
  content: string
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface SignMsg {
  wallet: string
  signature: string
}

export interface User {
  _id: string
  wallet: string
  userName: string
  email: string
  avatar: string
}

export interface PropertyData {
  _id: string
  contract: string
  name: string
  symbol: string
  kya: string
  minAmount: number
  totalSupply: number
  circulation: number
  location: string
  price: number
  propertyPrice: number
  irr: number
  apr: number
  growth: number
  bedroom: number
  bathroom: number
  square: number
  content: string
  image: string
  updatedAt: string
}

export interface InitialState {
  isLoggedIn: boolean
  token: string
  wallet: string
  user: User
}

export interface InvestInfo {
  token: number
  IRP: number
  APR: number
  valueGrowth: number
  minInverstment: number
}

export interface CardProps {
  id?: string
  shape: 'landscape' | 'portrait'
  imgUrl: string
  address: string
  street: string
  price: number
  propertyPrice: number
  cardInfo: InvestInfo
  tokenAvailable: number
  ribbonflag?: boolean
}

export interface BasicDropdownProps {
  children: React.ReactNode
  optionData: string[]
  className?: string
}

export interface PropertyCardProps {
  property: Property
}

export interface AboutPropertyProps {
  beds: number
  bathrooms: number
  square: number
  location: string
}

export interface AccordionData {
  id: string
  title: string
  content: string
}

export interface FrameProps {
  imgUrl: StaticImageData
  content: string
  className: string
}

export interface PropertyFilterProps {
  property: PropertyOption
  setProperty: (alignItems: PropertyOption) => void
}

export interface ChartOptionProps {
  property: PropertyOption
  dataOption: ChartDataOption
  setDataOption: (option: ChartDataOption) => void
}

export interface FilterOptionsProps {
  alignment: FilterOption
  setAlignment: (alignItems: FilterOption) => void
}

export interface InvestGraphProps {
  dataOption: ChartDataOption
}

export interface GoogleMapProps {
  location: string
  zoom: number
}
