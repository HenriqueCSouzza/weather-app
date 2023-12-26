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
  const [input, setInput] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitText()
    }
  }

  const submitText = () => {
    if (input.trim() !== '' && setText) {
      setText(input.trim())
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
            onKeyDown={handleKeyDown}
            value={input}
            aria-label="Type your location"
            role="search"
            placeholder="City, State, Country"
            data-testid="search input"
          />
          <IconButton
            onClick={handleVisibleClick}
            disableRipple
            aria-label="close search"
            data-testid="close search"
          >
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
        aria-label="Submit search"
        data-testid="button search"
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
