import PortfolioGrid from "@/components/portfolio-grid";
import SearchProjects from "@/components/search-projects";
import SearchAllProjects from "@/utils/search-all-projects";

export default async function DiscoverPage() {
    const allProjects = await SearchAllProjects();
    return (
        <main className="flex flex-col gap-3 p-10">
            <h1 className='text-xl lg:text-3xl text-center mt-10 m-auto w-[85%] lg:w-1/2'>
                Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis
            </h1>
            <SearchProjects label="Descubra projetos" />
            <PortfolioGrid allProjects={allProjects} />
        </main>
    );
}    
