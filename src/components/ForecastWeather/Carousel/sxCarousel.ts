export const iconButtonSx = {
  borderRadius: 0,
  height: 265.6,
  '.MuiSvgIcon-root': {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  }
}
export const containerSx = {
  width: '100%',
  position: 'relative',
  overflowX: 'hidden',
  padding: '20px',
  display: 'flex'
}

export const containerTranslateXSx = (
  currentIndex: number,
  itemsToShow: number
) => {
  return {
    zIndex: 0,
    display: 'flex',
    gap: 6,
    transition: 'transform 0.3s ease',
    transform: {
      xs: `translateX(-${Math.round(currentIndex * (100 / itemsToShow))}%)`,
      sm: `translateX(-${Math.floor(currentIndex * (125 / itemsToShow))}%)`,
      md: `translateX(-${Math.floor(currentIndex * (175 / itemsToShow))}%)`
    }
  }
}
