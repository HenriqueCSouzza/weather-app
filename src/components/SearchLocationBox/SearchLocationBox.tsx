import { Box, Typography } from '@mui/material'
import GeolocationSvg from '../../assets/Geolocation'
import LocationInput from './LocationInput'
import { useState } from 'react'

type SearchLocationType = {
  city?: string
  setCity?: React.Dispatch<React.SetStateAction<string>>
}
export default function SearchLocationBox({
  city,
  setCity
}: SearchLocationType) {
  const [isInputVisible, setIsInputVisible] = useState(false)

  const handleVisibleClick = () => {
    setIsInputVisible(() => !isInputVisible)
  }

  return (
    <Box
      display="flex"
      height="64px"
      alignItems="center"
      justifyContent="space-between"
    >
      {!isInputVisible ? (
        <>
          <GeolocationSvg />
          <Box
            sx={{
              flexShrink: 0,
              '.MuiTypography-body1': {
                color: '#FFF',
                textShadow: '-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.10)',
                fontFamily: 'Inter Variable',
                fontSize: { xs: '28px', sm: '32px', md: '32px' },
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: 1.2
              }
            }}
          >
            <Typography>{city}</Typography>
          </Box>
        </>
      ) : null}
      <Box display={{ xs: 'none', sm: 'none', md: 'inherit' }}>
        <LocationInput
          handleVisibleClick={handleVisibleClick}
          visibility={isInputVisible}
          setText={setCity}
        />
      </Box>
    </Box>
  )
}
