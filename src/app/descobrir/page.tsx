import RedirectIfNotLogged from "@/utils/redirect-if-not-logged";

export default async function DiscoverPage() {
    const userInfo = await RedirectIfNotLogged();

    return <h1>Descobrir</h1>;
}
