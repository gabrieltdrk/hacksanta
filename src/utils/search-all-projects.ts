'use server';

import { redirect } from 'next/navigation';
import { createClient } from './supabase/server';
import { AllProjectsProps } from "@/components/portfolio-grid";

export default async function SearchAllProjects() {
    const supabase = await createClient();

    const { data: usuario } = await supabase.auth.getUser();
    const is_public = true;

    if (!usuario?.user) {
        redirect('/login');
    }

    const { data: allProjects } = await supabase
        .from('projetos')
        .select('id, nome, descricao, tags, is_public, created_at, imagem_url, usuarios!left(nome, sobrenome)')
        .eq('is_public', is_public) as unknown as { data: AllProjectsProps[] };

    if (!allProjects) {
        redirect('/login');
    }

    const projectsWithImageUrls = allProjects.map(project => {
        const { data } = supabase.storage.from('projetos').getPublicUrl(project.imagem_url);
        return {
            ...project,
            imagem_url: data?.publicUrl || 'https://placehold.co/600x400',
        };
    });

    return projectsWithImageUrls;
}
