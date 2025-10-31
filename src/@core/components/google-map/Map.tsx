// ** React Imports
import { useState, useCallback, useEffect } from 'react'

// ** MUI Imports
import { Box, Typography } from '@mui/material'

// ** Google API Imports
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

// ** Riple Imports
import { Riple } from 'react-loading-indicators'

// ** Config Imports
import config from 'src/configs'

// ** Types Import
import { GoogleMapProps } from 'src/types'

// Custom components Import
import Translations from '../translations'

const GOOGLE_MAPS_API_KEY = config.google_api_key

const GoogleMapComponent = ({ location, zoom }: GoogleMapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)

  const [isFindnigLocation, setIsFindingLocation] = useState(false)
  const [isFoundLocation, setIsFoundLocation] = useState(true)

  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.006 })

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const handleSearch = () => {
    const geocoder = new window.google.maps.Geocoder()
    setIsFindingLocation(true)
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK') {
        if (results) {
          const newCenter = results[0].geometry.location
          setCenter({ lat: newCenter.lat(), lng: newCenter.lng() })
        }
        setIsFoundLocation(true)
      } else {
        setIsFoundLocation(false)
      }
      setIsFindingLocation(false)
    })
  }

  useEffect(() => {
    if (isLoaded) {
      handleSearch()
    }
  }, [isLoaded, location])

  useEffect(() => {
    if (map) {
      map.panTo(center)
      map.setZoom(zoom)
    }
  }, [map, center, zoom])

  if (!isFoundLocation)
    return (
      <Typography className='font-Inter dark:text-white'>
        <Translations text='Not found location on the map' />
      </Typography>
    )
  if (loadError)
    return (
      <Typography className='font-Inter'>
        <Translations text='Error loading maps' />
      </Typography>
    )
  if (!isLoaded || isFindnigLocation)
    return (
      <Box className='w-full flex justify-center px-10 min-h-[600px] items-center'>
        <Riple size='medium' />
      </Box>
    )

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        borderRadius: '1rem',
        position: 'relative'
      }}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}

export default GoogleMapComponent
