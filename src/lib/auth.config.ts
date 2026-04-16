import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.organizationId = (user as any).organizationId;
                token.organizationName = (user as any).organizationName;
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (session.user) {
                (session.user as any).organizationId = token.organizationId;
                (session.user as any).organizationName = token.organizationName;
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
    providers: [], // Credentials provider added in the full auth.ts
    session: {
        strategy: "jwt",
    },
} satisfies NextAuthConfig;
