import { Container } from '@mui/material';

export function GridPortfolio() {
    // contar projetos no banco de dados;
    const projects = 1;

    return (
        <main className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
            {projects === 0 ? (
                <Container
                    sx={{
                        height: '258px',
                        width: '312px',
                        bgcolor: 'lightgray',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto' // Centraliza o container horizontalmente
                    }}
                >
                    Teste
                </Container>
            ) : (
                <>
                    <div className="w-[312px] h-[258px] bg-black mx-auto">
                        projeto 1
                    </div>
                    <div className="w-[312px] h-[258px] bg-black mx-auto">
                        projeto 2
                    </div>
                    <div className="w-[312px] h-[258px] bg-black mx-auto">
                        projeto 3
                    </div>
                </>
            )}
        </main>
    );
}
