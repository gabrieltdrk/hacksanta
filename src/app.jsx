import { useState } from 'react';
import { HomePage } from './pages/Homepage';
import { SignupPage } from './pages/SignupPage';
import { PortfolioPage } from './pages/PortfolioPage';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
    <PortfolioPage />
      {/* {isLoggedIn ? (
        <PortfolioPage />
      ) : (
        <HomePage onLogin={handleLogin} />
      )} */}
    </>
  )
}

export default App
