import property from '../../public/img/property.png'
import property1 from '../../public/img/property1.png'
import property2 from '../../public/img/property2.png'

import darkproperty from '../../public/img/property-dark.png'
import darkproperty1 from '../../public/img/property-dark1.png'
import darkproperty2 from '../../public/img/property-dark2.png'

import staticIcon from '../../public/img/StatisticIcon.png'
import staticIcon1 from '../../public/img/StatisticIcon1.png'
import staticIcon2 from '../../public/img/StatisticIcon2.png'

import Frame from '../../public/img/Frame1.png'
import Frame2 from '../../public/img/Frame2.png'

import { AccordionData } from 'src/types'

export const footerMenuItems = [
  ['Home', 'My favorites', 'Recents'],
  ['Explore', 'Lists', 'Maps'],
  ['Campaigns', 'Home', 'Investment', 'Analytics'],
  ['Profile', 'Settings', 'Notifications'],
  ['Resources', 'How to use RWA Estate', 'Docs', 'Legal Terms', 'Blog', 'Merch']
]

export const accordionData: AccordionData[] = [
  {
    id: 'panel1',
    title: 'What is RWA Estate?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel2',
    title: 'What are Real-World Assets (RWAs)?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel3',
    title: 'Can I access historical data on RWAs?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel4',
    title: 'How can I use the statistics provided on your website?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel5',
    title: 'What are Estate RWAs?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel6',
    title: 'Why is estate tokenization getting more relevant?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel7',
    title: 'What kind of statistics do you provide on RWAs?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel8',
    title: 'Does RWA Estate offer information on tokenized property from certain regions?',
    content:
      'RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  }
]

export const priceData = [
  {
    position: 'absolute flex gap-2.5 items-center top-60p left-20p scale-up-1 max-sm:hidden',
    arrowSize: 'w-5 h-5',
    price: '$53.88',
    priceTextSize: 'text-base'
  },
  {
    position: 'absolute flex gap-2.5 items-center top-55p left-15p scale-up-3 max-sm:hidden',
    arrowSize: 'w-5 h-5',
    price: '$23.42',
    priceTextSize: 'text-base'
  },
  {
    position: 'absolute flex gap-2.5 items-center bottom-15p left-20p scale-up-4',
    arrowSize: 'w-5 h-5',
    price: '$12.31',
    priceTextSize: 'text-base'
  },
  {
    position: 'absolute flex gap-2.5 items-center bottom-25p right-20p scale-up-5',
    arrowSize: 'w-5 h-5',
    price: '$43.80',
    priceTextSize: 'text-base'
  },
  {
    position: 'absolute flex gap-2.5 items-center bottom-15p right-20p scale-up-6',
    arrowSize: 'w-5 h-5',
    price: '$23.42',
    priceTextSize: 'text-base'
  },
  {
    position: 'absolute flex gap-2.5 items-center bottom-25p right-25p scale-up-2 max-sm:hidden',
    arrowSize: 'w-5 h-5',
    price: '$51.21',
    priceTextSize: 'text-base'
  }
]

export const propertyData = [
  {
    title: 'Explore property features',
    content: 'Discover first-hand information about real estate provided directly by the issuers',
    url: property
  },
  {
    title: 'Track token rates & pricing history',
    content: 'We update blockchain data automatically in real time',
    url: property1
  },
  {
    title: 'Find markets and platforms to buy tokens on',
    content: 'You no longer have to negotiate commissions and haggle with other agents it only cost 2%!',
    url: property2
  }
]

export const darkPropertyData = [
  {
    title: 'Explore property features',
    content: 'Discover first-hand information about real estate provided directly by the issuers',
    url: darkproperty
  },
  {
    title: 'Track token rates & pricing history',
    content: 'We update blockchain data automatically in real time',
    url: darkproperty1
  },
  {
    title: 'Find markets and platforms to buy tokens on',
    content: 'You no longer have to negotiate commissions and haggle with other agents it only cost 2%!',
    url: darkproperty2
  }
]

export const cardData = [
  {
    _id: '6731a7ec411e27ba5880cf0e',
    contract: '0xf447bde4f8c00028052b410f146e39fd9b1bd553',
    name: 'Rosewood Manor',
    symbol: 'RWA',
    kya: 'ipfs://QmTqUrEDnsGo63c4cXPgM9XC5Gy3X6tcD1Wtd8VPx1eqNa',
    minAmount: 0,
    totalSupply: 0,
    circulation: 0,
    location: '890 Spruce St',
    price: 0,
    propertyPrice: 0,
    irr: 2,
    apr: 3,
    growth: 5,
    bedroom: 2,
    bathroom: 2,
    square: 230,
    content:
      'Presenting Villa Blue Water, GORO’s first villa in Seminyak, Bali, a modern 3-bedroom villa located in the heart of vibrant Seminyak, Bali. Villa Blue Water offers an unparalleled experience of comfort. The villa was bought on a leasehold until March 14, 2054 (~30 years).\nStep inside Villa Blue Water and discover a cozy, beautifully designed living space. The sunken sofa adds a unique touch, creating a warm and inviting area perfect for relaxation. The fully equipped kitchen and dining area, complete with modern appliances and ample space, are ideal for hosting dinner parties and family gatherings. Each of the three elegantly decorated bedrooms features en-suite bathrooms, ensuring comfort and privacy for all guests.',
    image: 'img-1731307408932-43559727.png',
    createdAt: '2024-11-11T06:45:00.787Z',
    updatedAt: '2024-11-11T06:45:00.787Z',
    __v: 0
  },
  {
    _id: '67321650411e27ba5880d0e9',
    contract: '0x3e34efc3c7c88a1a14af772dc3e2e7b8810a60fc',
    name: 'Sunnybrook Cottage',
    symbol: 'RWA',
    kya: 'ipfs://QmXE84pX5hvGRcBmhAQsbpJickWFQsqh5qhRmBw2c2RaUc',
    minAmount: 0,
    totalSupply: 0,
    circulation: 0,
    location: '1350 Cherry Blossom Blvd',
    price: 0,
    propertyPrice: 0,
    irr: 13,
    apr: 12,
    growth: 11,
    bedroom: 2,
    bathroom: 2,
    square: 250,
    content:
      'Presenting Villa Blue Water, GORO’s first villa in Seminyak, Bali, a modern 3-bedroom villa located in the heart of vibrant Seminyak, Bali. Villa Blue Water offers an unparalleled experience of comfort. The villa was bought on a leasehold until March 14, 2054 (~30 years).\nStep inside Villa Blue Water and discover a cozy, beautifully designed living space. The sunken sofa adds a unique touch, creating a warm and inviting area perfect for relaxation. The fully equipped kitchen and dining area, complete with modern appliances and ample space, are ideal for hosting dinner parties and family gatherings. Each of the three elegantly decorated bedrooms features en-suite bathrooms, ensuring comfort and privacy for all guests.',
    image: 'img-1731335546027-367613806.png',
    createdAt: '2024-11-11T14:36:00.732Z',
    updatedAt: '2024-11-11T14:36:00.732Z',
    __v: 0
  },
  {
    _id: '67323cff411e27ba5880d196',
    contract: '0xadc074a96fc4a7cb4735cdea2ec9df02074e08c6',
    name: "Eagle's Nest",
    symbol: 'RWA',
    kya: 'ipfs://QmSewwRZsyGkHaFfgXXEUV4iH6TLj2MfeE4qxarvD6JtnS',
    minAmount: 0,
    totalSupply: 0,
    circulation: 0,
    location: '1350 Cherry Blossom Blvd',
    price: 0,
    propertyPrice: 0,
    irr: 5,
    apr: 5,
    growth: 5,
    bedroom: 1,
    bathroom: 1,
    square: 230,
    content:
      'Presenting Villa Blue Water, GORO’s first villa in Seminyak, Bali, a modern 3-bedroom villa located in the heart of vibrant Seminyak, Bali. Villa Blue Water offers an unparalleled experience of comfort. The villa was bought on a leasehold until March 14, 2054 (~30 years). Step inside Villa Blue Water and discover a cozy, beautifully designed living space. The sunken sofa adds a unique touch, creating a warm and inviting area perfect for relaxation. The fully equipped kitchen and dining area, complete with modern appliances and ample space, are ideal for hosting dinner parties and family gatherings. Each of the three elegantly decorated bedrooms features en-suite bathrooms, ensuring comfort and privacy for all guests.',
    image: 'img-1731345576054-428609558.png',
    createdAt: '2024-11-11T17:21:03.302Z',
    updatedAt: '2024-11-11T17:21:03.302Z',
    __v: 0
  },
  {
    _id: '67323f18411e27ba5880d1a3',
    contract: '0x9c44d852bdee01aecc378bf96d2a7e955f292dd8',
    name: 'Whispering Pines',
    symbol: 'RWA',
    kya: 'ipfs://QmTmjyiuzFFBwv4DW4ZYCcvxLhRAyUHsJmBof8SVQu6ZnD',
    minAmount: 0,
    totalSupply: 0,
    circulation: 0,
    location: 'Pine Las Park',
    price: 0,
    propertyPrice: 0,
    irr: 4,
    apr: 4,
    growth: 4,
    bedroom: 3,
    bathroom: 3,
    square: 1000,
    content:
      'Presenting Villa Blue Water, GORO’s first villa in Seminyak, Bali, a modern 3-bedroom villa located in the heart of vibrant Seminyak, Bali. Villa Blue Water offers an unparalleled experience of comfort. The villa was bought on a leasehold until March 14, 2054 (~30 years). Step inside Villa Blue Water and discover a cozy, beautifully designed living space. The sunken sofa adds a unique touch, creating a warm and inviting area perfect for relaxation. The fully equipped kitchen and dining area, complete with modern appliances and ample space, are ideal for hosting dinner parties and family gatherings. Each of the three elegantly decorated bedrooms features en-suite bathrooms, ensuring comfort and privacy for all guests.',
    image: 'img-1731346029927-739096404.png',
    createdAt: '2024-11-11T17:30:00.724Z',
    updatedAt: '2024-11-11T17:30:00.724Z',
    __v: 0
  },
  {
    _id: '67323fcc411e27ba5880d1aa',
    contract: '0x96c3c0227c6238f2b8fc72b997d37b0382cf43f7',
    name: 'Whispering Pines',
    symbol: 'RWA',
    kya: 'ipfs://QmbUTrm5T6teMryjtHBJU1CP7E4dnwFeVgQgh9aYXrZmXf',
    minAmount: 0,
    totalSupply: 0,
    circulation: 0,
    location: 'Pine Las Park',
    price: 0,
    propertyPrice: 0,
    irr: 4,
    apr: 4,
    growth: 4,
    bedroom: 3,
    bathroom: 3,
    square: 100,
    content:
      'Presenting Villa Blue Water, GORO’s first villa in Seminyak, Bali, a modern 3-bedroom villa located in the heart of vibrant Seminyak, Bali. Villa Blue Water offers an unparalleled experience of comfort. The villa was bought on a leasehold until March 14, 2054 (~30 years). Step inside Villa Blue Water and discover a cozy, beautifully designed living space. The sunken sofa adds a unique touch, creating a warm and inviting area perfect for relaxation. The fully equipped kitchen and dining area, complete with modern appliances and ample space, are ideal for hosting dinner parties and family gatherings. Each of the three elegantly decorated bedrooms features en-suite bathrooms, ensuring comfort and privacy for all guests.',
    image: 'img-1731346206965-816726664.png',
    createdAt: '2024-11-11T17:33:00.702Z',
    updatedAt: '2024-11-11T17:33:00.702Z',
    __v: 0
  }
]

export const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sample Data',
      data: [230, 280, 200, 220, 310, 240, 250],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      borderColor: '#84CC16',
      borderWidth: 2,
      tension: 0.4
    }
  ]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  }
}

export const staticData = [
  {
    staticIcon: staticIcon,
    title: 'Total Investment',
    valueEther: '0.56',
    valueUSD: '283.49',
    bgColor: '#fbB14a3d'
  },
  {
    staticIcon: staticIcon1,
    title: 'Weekly Returns',
    valueEther: '0.06',
    valueUSD: '19.49',
    bgColor: '#84cc163d'
  },
  {
    staticIcon: staticIcon2,
    title: 'Expenses',
    valueEther: '0.02',
    valueUSD: '5.38',
    bgColor: '#ed5b753d'
  }
]

export const calculatorData = {
  investmentAmount: {
    label: 'Investment Amount',
    value: '~$950,23'
  },
  investmentPeriod: {
    label: 'Investment period',
    years: 3,
    months: 3,
    maxYears: 5
  },
  tokensToGet: {
    label: 'Tokens you will get',
    value: 77.63
  },
  actualInvestmentAmount: {
    label: 'Actual investment amount',
    value: 50
  },
  projectedTotalIncome: {
    label: 'Projected Total Income',
    value: 19.5
  },
  projectedRentalIncome: {
    label: 'Projected Rental Income',
    value: 16.5
  },
  projectionAppreciation: {
    label: 'Projection Appreciation',
    value: 2.5
  },
  finalBalance: {
    label: 'Final Balance',
    value: 69.5
  }
}

export const cardInfo = {
  token: 1500,
  IRP: 20,
  APR: 8,
  valueGrowth: 20,
  minInverstment: 50
}

export const simulationData = [
  {
    title: 'Villa Blue Water',
    location: '890 Spruce St',
    price: '$213,230,000',
    priceChange: '+16%',
    pricePerSquareFoot: '$150',
    occupancyRate: '78%',
    avatarSrc: 'img/property/img1.png'
  },
  {
    title: "Eagle's Nest",
    location: '1350 Cherry Blossom Blvd',
    price: '$424,114,000',
    priceChange: '+20%',
    pricePerSquareFoot: '$64',
    occupancyRate: '12%',
    avatarSrc: 'img/property/img2.png'
  },
  {
    title: 'Lavender Hill House',
    location: '890 Spruce St',
    price: '$644,325,000',
    priceChange: '+15%',
    pricePerSquareFoot: '$334',
    occupancyRate: '34%',
    avatarSrc: 'img/property/img3.png'
  },
  {
    title: 'Silver Lake Lodge',
    location: '234 Pine St',
    price: '$213,230,000',
    priceChange: '+26%',
    pricePerSquareFoot: '$150',
    occupancyRate: '57%',
    avatarSrc: 'img/property/img4.png'
  },
  {
    title: 'Sunnybrook Cottage',
    location: '345 Maplewood Dr',
    price: '$424,230,000',
    priceChange: '+20%',
    pricePerSquareFoot: '$64',
    occupancyRate: '62%',
    avatarSrc: 'img/property/img5.png'
  }
]

export const frameData = [
  { imgUrl: Frame, content: 'Find the best deal', className: 'frame1' },
  { imgUrl: Frame2, content: 'Browse Thousands of Properties', className: 'frame2' }
]

export const imageData = [
  {
    id: 'image-1',
    original: '/img/home/thumbnail/img1.png',
    thumbnail: '/img/home/thumbnail/img1.png'
  },
  {
    id: 'image-1',
    original: '/img/home/thumbnail/img2.png',
    thumbnail: '/img/home/thumbnail/img2.png'
  },
  {
    id: 'image-1',
    original: '/img/home/thumbnail/img3.png',
    thumbnail: '/img/home/thumbnail/img3.png'
  },

  {
    id: 'image-1',
    original: '/img/home/thumbnail/img4.png',
    thumbnail: '/img/home/thumbnail/img4.png'
  },
  {
    id: 'image-1',
    original: '/img/home/thumbnail/img5.png',
    thumbnail: '/img/home/thumbnail/img5.png'
  }
]

export const stageData = [
  '1020 Bloomingdale Ave',
  '345 Maplewood Dr',
  '789 Cedar Lane',
  '321 Birch Ave',
  '890 Spruce St'
]

export const aboutContent = `Presenting Villa Blue Water, GORO’s first villa in Seminyak, Bali, a modern 3-bedroom villa located in the heart
  of vibrant Seminyak, Bali. Villa Blue Water offers an unparalleled experience of comfort. The villa was bought
  on a leasehold until March 14, 2054 (~30 years). Step inside Villa Blue Water and discover a cozy, beautifully
  designed living space. The sunken sofa adds a unique touch, creating a warm and inviting area perfect for
  relaxation. The fully equipped kitchen and dining area, complete with modern appliances and ample space, are
  ideal for hosting dinner parties and family gatherings. Each of the three elegantly decorated bedrooms features
  en-suite bathrooms, ensuring comfort and privacy for all guests.`

export const villaData = [
  {
    id: 'panel1',
    title: 'Financials',
    content:
      '1. RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel2',
    title: 'Documents',
    content:
      '2. RWA Estate is a platform thast consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  },
  {
    id: 'panel3',
    title: 'Timelines',
    content:
      '3. RWA Estate is a platform that consolidates tokenized estates in one place. Our aim is to increase visibility for tokenized property by providing real-time information and statistics about it.'
  }
]
