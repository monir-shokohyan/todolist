import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <main
      className={`m-4 p-6  flex-shrink-0 `}
    >
      <div className="h-full">
        <Outlet />
      </div>
    </main>
  )
}