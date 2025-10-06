import { RouteType } from '@shared/types/router/route-type'

import { mainRoute } from './folder'

export const routes: RouteType[] = [
  ...mainRoute,

  {
    key: 'not-found',
    path: '*',
    element: <div>404</div>,
    withoutLayout: true,
  },
]
