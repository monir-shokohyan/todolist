import { Route, Routes } from 'react-router-dom'

import { ErrorSuspense } from '@shared/ui/error-suspense'

import { routes } from '../config/routes'
import { Layout } from './layout'

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <ErrorSuspense suspenseKey="/layout">
            <Layout />
          </ErrorSuspense>
        }
      >
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  )
}
