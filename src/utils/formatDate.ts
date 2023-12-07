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
  // Verifica se a data é válida antes de retorná-la
  if (!isNaN(parsedDate.getTime())) {
    return parsedDate
  } else {
    console.log('Data inválida')
    return new Date()
  }
}
