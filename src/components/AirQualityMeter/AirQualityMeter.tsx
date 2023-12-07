import { Box, Typography } from '@mui/material'

const coordinates = {
  1: {
    cx: '5',
    cy: '70',
    text: 'Good'
  },
  2: {
    cx: '30',
    cy: '30',
    text: 'Fair'
  },
  3: {
    cx: '70',
    cy: '6',
    text: 'Moderate'
  },
  4: {
    cx: '155',
    cy: '30',
    text: 'Poor'
  },
  5: {
    cx: '178',
    cy: '71',
    text: 'Very Poor	'
  }
}

const AirQualitySVG = ({
  air,
  title
}: {
  air?: 1 | 2 | 3 | 4 | 5
  title?: string
}) => {
  const isAirValid = air && air >= 1 && air <= 5
  return (
    <Box>
      <Box
        mb="30px"
        textAlign="center"
        marginRight={2}
        sx={{
          textShadow: '-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.10)',
          color: '#fff',
          '.MuiTypography-body1': {
            fontSize: '28px',
            fontWeight: 300
          }
        }}
      >
        <Typography>{title}</Typography>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="150"
        fill="none"
      >
        <g>
          <path
            d="M176.224 91.8881C176.224 93.9737 177.915 95.6643 180 95.6643C182.086 95.6643 183.777 93.9737 183.777 91.8881H176.224ZM164.943 49.723C172.117 62.1238 176.224 76.5206 176.224 91.8881H183.777C183.777 75.1576 179.302 59.4607 171.481 45.9413L164.943 49.723Z"
            fill="#713FFD"
          />
          <path
            d="M168.212 47.8322C160.475 34.4555 149.321 23.302 135.944 15.564"
            stroke="#865CFD"
            strokeOpacity="0.85"
            strokeWidth="6"
            id="very-poor"
          />
          <path
            d="M91.8877 3.77625C107.937 3.77625 122.984 8.06704 135.944 15.5641"
            stroke="#9874FF"
            strokeOpacity="0.83"
            strokeWidth="6"
            id="poor"
          />
          <path
            d="M91.8877 3.77625C75.786 3.77625 60.6931 8.09528 47.7041 15.638"
            stroke="#AC8EFF"
            strokeOpacity="0.78"
            strokeWidth="6"
            id="moderate"
          />
          <path
            d="M15.5635 47.8321C23.2769 34.498 34.3842 23.3729 47.704 15.6379"
            stroke="#CDBBFF"
            strokeOpacity="0.63"
            strokeWidth="6"
            id="fair"
          />
          <path
            d="M0 91.8881C0 93.9737 1.69068 95.6643 3.77622 95.6643C5.86177 95.6643 7.55245 93.9737 7.55245 91.8881H0ZM7.55245 91.8881C7.55245 76.5206 11.6593 62.1238 18.8328 49.723L12.2953 45.9413C4.47477 59.4607 0 75.1576 0 91.8881H7.55245Z"
            fill="white"
            fillOpacity="0.24"
            id="good"
          />
          {isAirValid ? (
            <circle
              cx={coordinates[air].cx}
              cy={coordinates[air].cy}
              r="5"
              fill="white"
            />
          ) : null}
        </g>
      </svg>
      {isAirValid ? (
        <Box
          textAlign="center"
          marginTop={-13}
          marginRight={2}
          sx={{
            textShadow: '-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.10)',
            color: '#fff',
            '.MuiTypography-body1': {
              fontSize: '19px',
              fontWeight: 300
            }
          }}
        >
          <Typography>{air}/5</Typography>
          <Typography>{coordinates[air].text}</Typography>
        </Box>
      ) : null}
    </Box>
  )
}

export default AirQualitySVG
