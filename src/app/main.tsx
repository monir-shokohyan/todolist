import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from '@app/providers'

import { AppRouter } from './router'

import './main.css'

const container = document.querySelector('#root')

if (!container) {
  throw new Error('Container was not found')
}

createRoot(container).render(
  // <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  // </StrictMode>,
)
