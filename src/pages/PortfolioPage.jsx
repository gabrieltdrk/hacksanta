import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Profile } from '../components/Profile'
import { GridPortfolio } from '../components/GridPortfolio'

export function PortfolioPage() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const location = useLocation()
  const email = location.state?.email

  return (
    <>
      <Profile usuarioEmail={email} open={open} handleClose={handleClose} />
      <GridPortfolio handleOpen={handleOpen} />
    </>
  )
}
