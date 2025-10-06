import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <main
      className={`m-4 p-6  flex-shrink-0 border-2 border-gray-200 bg-gray-100 shadow-md`}
    >
      <div className="h-full">
        <Outlet />
      </div>
    </main>
  )
}