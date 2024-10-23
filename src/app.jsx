import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'

import { DiscoverPage } from './pages/DiscoverPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { SignupPage } from './pages/SignupPage'

const isAuth = false

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={isAuth ? <MainLayout /> : <LoginPage />}>
        <Route index element={<PortfolioPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route basename path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
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
