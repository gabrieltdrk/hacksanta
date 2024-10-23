import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'

import { PortfolioPage } from './pages/PortfolioPage'
import { SignupPage } from './pages/SignupPage'
import { NotFoundPage } from './pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PortfolioPage />} />
        <Route path="/discover" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
)

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
