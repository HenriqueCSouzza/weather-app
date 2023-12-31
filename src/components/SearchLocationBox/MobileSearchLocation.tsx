import Box from '@mui/material/Box'
import SearchLocationBox from '.'
type SearchLocationType = {
  city?: string
  setCity?: React.Dispatch<React.SetStateAction<string>>
  name?: string
}
export default function MobileSearchLocation({
  city,
  setCity,
  name
}: SearchLocationType) {
  return (
    <Box
      display={{
        xs: 'inherit',
        sm: 'inherit',
        md: 'none'
      }}
      width="100%"
      zIndex={2}
      mb={3}
    >
      <SearchLocationBox city={city} setCity={setCity} name={name} />
    </Box>
  )
}
