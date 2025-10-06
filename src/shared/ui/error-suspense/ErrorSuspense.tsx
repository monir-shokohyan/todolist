import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '../ErrorFallBack'

const ErrorSuspense = ({
  suspenseKey,
  children,
}: {
  suspenseKey: string
  children: React.ReactNode
}) => {
  return (
    <Suspense
      key={suspenseKey}
      fallback={<h1>loading ...</h1>}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Suspense>
  )
}

export { ErrorSuspense }
