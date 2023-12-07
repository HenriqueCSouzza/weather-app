import { useState, useEffect } from 'react'

const Clock = ({ dt }: { dt: number }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useEffect(() => {
    const now = new Date(dt * 1000)
    setSeconds(now.getSeconds() * 6)
    setMinutes(now.getMinutes() * 6)
    setHours(((now.getHours() % 12) + now.getMinutes() / 60) * 30)
  }, [dt])

  return (
    <svg width="150">
      <line
        x1="75"
        y1="75"
        x2="75"
        y2="60"
        transform={`rotate(${hours} 75 75)`}
        stroke="#EEECEC"
        strokeWidth="4"
      />
      <line
        x1="75"
        y1="75"
        x2="75"
        y2="40"
        transform={`rotate(${minutes} 75 75)`}
        stroke="#828282"
        strokeWidth="4"
      />
      <line
        x1="75"
        y1="75"
        x2="75"
        y2="30"
        transform={`rotate(${seconds} 75 75)`}
        stroke="#885FFC"
        strokeWidth="2"
      />
    </svg>
  )
}

export default Clock
