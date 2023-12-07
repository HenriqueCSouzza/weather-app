import { Box, InputBase, IconButton } from '@mui/material'
import { Search as SearchIcon, Close } from '@mui/icons-material'
import { sxContainerLocalInput } from './sxLocalInput'
import { useState } from 'react'

const LocationInput = ({
  visibility,
  handleVisibleClick,
  setText
}: {
  visibility: boolean
  handleVisibleClick: () => void
  setText?: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [input, setInput] = useState<string>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const submitText = () => {
    if (input && setText) {
      setText(input)
      handleVisibleClick()
    }
  }
  return (
    <Box p={1.5} sx={sxContainerLocalInput(visibility)}>
      {visibility ? (
        <>
          <InputBase
            sx={{
              color: '#fff'
            }}
            fullWidth
            onChange={handleChange}
          />
          <IconButton onClick={handleVisibleClick} disableRipple>
            <Close
              color="white"
              sx={{
                fontSize: '26px'
              }}
            />
          </IconButton>
        </>
      ) : null}

      <IconButton
        onClick={visibility ? submitText : handleVisibleClick}
        disableRipple
      >
        <SearchIcon
          color="white"
          sx={{
            fontSize: '26px'
          }}
        />
      </IconButton>
    </Box>
  )
}

export default LocationInput
