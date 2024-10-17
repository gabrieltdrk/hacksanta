import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';
import { PortfolioPage } from '../pages/PortfolioPage';

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<SignupPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </>
    )
}
