import { auth } from "@/lib/auth";
import LandingClient from "./LandingClient";

export const dynamic = "force-dynamic";

export default async function LandingPage() {
    const session = await auth();

    return <LandingClient initialIsLoggedIn={!!session} />;
}
