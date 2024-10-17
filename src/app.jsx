import { useState } from 'react';
import { Routes } from './routes';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <Routes />
    </>
  )
}

export default App
