export function parseTimeString(timeString: string) {
  const [time, period] = timeString.split(' ')
  const [hours, minutes, seconds] = time.split(':')

  const formattedTime = `${hours}:${minutes}:${seconds} ${period}`
  const parsedDate = new Date(
    2023,
    12 - 1,
    7,
    Number(hours),
    Number(minutes),
    Number(seconds)
  )
  console.log(formattedTime, parsedDate)
  if (!isNaN(parsedDate.getTime())) {
    return parsedDate
  } else {
    console.error('Data inválida')
    return new Date()
  }
}
