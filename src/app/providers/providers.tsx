import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@app/store'

import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <BrowserRouter
      >
          <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}
