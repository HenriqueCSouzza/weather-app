import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LocationInput from './LocationInput'

describe('LocationInput Component', () => {
  test('verifica se o campo de texto está vazio inicialmente', () => {
    render(<LocationInput visibility={false} handleVisibleClick={() => {}} />)

    const button = screen.getByTestId('button search') as HTMLInputElement

    expect(button).toBeInTheDocument()
  })
})
