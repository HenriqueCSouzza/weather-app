import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ApplicationProvider from './providers/ApplicationProvider.tsx'
import theme from './theme'
import './style.css'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ApplicationProvider>
          <App />
        </ApplicationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
