import { Header } from '../components/Header';
import { Profile } from '../components/Profile';
import { GridPortfolio } from '../components/GridPortfolio';
import { SearchPortfolio } from '../components/SearchPortfolio';

export function PortfolioPage() {
    return (
        <>
            <Header />
            <Profile />
            {/* <SearchPortfolio /> */}
            <GridPortfolio />
        </>
    )
}