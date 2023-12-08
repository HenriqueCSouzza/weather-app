import { useEffect, useState } from 'react'

type WeatherImages = {
  icon?:
    | '01d'
    | '02d'
    | '03d'
    | '04d'
    | '09d'
    | '10d'
    | '11d'
    | '13d'
    | '50d'
    | '01n'
    | '02n'
    | '03n'
    | '04n'
    | '09n'
    | '10n'
    | '11n'
    | '13n'
    | '50n'
  width?: string
}

export default function WeatherImages({
  icon,
  width = '143px'
}: WeatherImages) {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  useEffect(() => {
    const loadImage = async () => {
      if (icon) {
        try {
          const { default: imgSrc } = await import(`./imgs/${icon}.png`)
          setImageSrc(imgSrc)
        } catch (error) {
          console.error('Erro ao carregar a imagem:', error)
        }
      }
    }

    loadImage()
  }, [icon])

  return imageSrc ? <img src={imageSrc} width={width} /> : null
}
