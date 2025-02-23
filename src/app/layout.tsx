import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();

  let user = null;

  if (!authError && authData?.user) {
    const { data: userData, error: userError } = await supabase
      .from("usuarios")
      .select("nome, sobrenome")
      .eq("id", authData.user.id)
      .single();

    if (!userError && userData) {
      user = {
        nome: userData.nome ?? "",
        sobrenome: userData.sobrenome ?? "",
        email: authData.user.email ?? "",
      };
    }
  }

  return (
    <html lang="en">
      <body>
        <div id="root">
          <Header user={user} />
          {children}
        </div>
      </body>
    </html>
  );
}
