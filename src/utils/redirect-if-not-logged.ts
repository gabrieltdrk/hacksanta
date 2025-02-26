'use server';

import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { UserInfo } from "@/app/meus-projetos/page";

export default async function RedirectIfNotLogged() {
    const supabase = await createClient();
    const { data: usuario } = await supabase.auth.getUser();

    if (!usuario.user) {
        redirect('/login');
    }

    const { data: userInfo } = await supabase
        .from('usuarios')
        .select('*, projetos!left(*)')
        .eq('id', usuario.user.id) as unknown as { data: UserInfo[] };

    if (!userInfo || userInfo.length === 0) {
        redirect('/login');
    }
    return userInfo[0];
}
