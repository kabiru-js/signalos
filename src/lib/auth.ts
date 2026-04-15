import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "SignalOS Admin",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const username = process.env.ADMIN_USERNAME || "admin";
                const password = process.env.ADMIN_PASSWORD || "signalos2026";

                if (
                    credentials?.username === username &&
                    credentials?.password === password
                ) {
                    return { id: "1", name: "Admin", email: "admin@signalos.app" };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
});
