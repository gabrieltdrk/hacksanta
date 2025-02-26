import { TextField } from "@mui/material";

interface SearchProjectsProps {
    label: string;
}

export default function SearchProjects({ label }: SearchProjectsProps) {
    return (
        <nav className="flex flex-col gap-4 my-10">
            <h1 className="text-2xl">{label}</h1>
            <TextField
                label="Buscar tags"
                className='w-full lg:w-1/2'
            />
        </nav>
    )
}