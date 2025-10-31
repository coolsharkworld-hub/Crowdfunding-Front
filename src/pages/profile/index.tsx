// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Box, Stack, Typography } from '@mui/material'

//  ** Types Import
import { FilterOption, PropertyOption } from 'src/types'

// ** Mock data Imports
import { cardData } from 'src/mock/data'

// ** Custom components Import
import Translations from 'src/@core/components/translations'
import ProfileCard from 'src/views/profile/profilecard'
import StaticCard from 'src/views/profile/staticcard'
import FilterOptions from 'src/views/simulation/filteroptions'
import PropertyFilter from 'src/views/profile/propertyfilter'
import Card from 'src/views/component/Card'
import config from 'src/configs'

const Profile = () => {
  const [alignment, setAlignment] = useState<FilterOption>('price')
  const [property, setProperty] = useState<PropertyOption>('all')

  return (
    <Box className='dark:bg-libertyblue bg-white min-h-screen transition-all duration-300'>
      <Stack className='container lg:flex-row flex-col py-6 mx-auto gap-8'>
        <Stack direction='column' spacing={2} className='lg:w-360 w-full'>
          <ProfileCard />
          <StaticCard />
        </Stack>
        <Stack direction='column' className='flex-1 gap-6'>
          <Stack direction='row' className='justify-between'>
            <PropertyFilter property={property} setProperty={setProperty} />
            <Stack direction='row' className='gap-3 items-center'>
              <Typography className='font-Inter dark:text-saltboxblue text-saltboxblue font-normal text-sm'>
                3 <Translations text='properties' />
              </Typography>
              <FilterOptions alignment={alignment} setAlignment={setAlignment} />
            </Stack>
          </Stack>
          <Stack className='w-full flex-row gap-6 flex-wrap'>
            {cardData.slice(0, 3).map((item, index) => (
              <Box key={index} className='lg:w-calc-33-minus-16 md:w-calc-50-minus-12 w-full'>
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
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Profile
