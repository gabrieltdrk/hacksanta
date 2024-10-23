import { Container } from '@mui/material';
import { Collections } from '@mui/icons-material';

export function GridPortfolio({ usuario, handleOpen }) {
    const projects = 0;

    return (
        <main className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
            {projects === 0 ? (
                <Container
                    onClick={handleOpen}
                    sx={{
                        cursor: 'pointer',
                        height: '258px',
                        width: '312px',
                        bgcolor: 'lightgray',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto'
                    }}
                >
                    <Collections sx={{
                        width: 46
                    }} />
                    <h3 className="text-base">Adicione seu primeiro projeto</h3>
                    <h4 className="text-sm">Compartilhe seu talento com milhares de pessoas.</h4>
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
