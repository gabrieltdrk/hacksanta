// utils/redirect-if-not-logged.ts
'use server';

import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { UserInfo } from "@/app/meus-projetos/page";

export default async function RedirectIfNotLogged() {
    const supabase = await createClient();
    const { data: usuario } = await supabase.auth.getUser();

    if (!usuario.user) {
        redirect('/login'); // ❗ Removemos o `return`, pois `redirect` já interrompe a execução
    }

    const { data: userInfo } = await supabase
        .from('usuarios')
        .select('*, projetos!left(id_criador)')
        .eq('id', usuario.user.id) as unknown as { data: UserInfo[] };

    if (!userInfo || userInfo.length === 0) {
        redirect('/login');
    }

    return userInfo[0]; // Retornamos os dados se necessário
}
