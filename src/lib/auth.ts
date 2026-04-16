import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            organizationId?: string;
            organizationName?: string;
            role?: string;
        } & DefaultSession["user"];
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "SignalOS Account",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                    include: {
                        memberships: {
                            include: {
                                organization: true
                            }
                        }
                    }
                });

                if (!user || !user.password) return null;

                const isValid = await bcrypt.compare(credentials.password as string, user.password);
                if (!isValid) return null;

                // For simplicity, we attach the first organization found
                const membership = user.memberships[0];

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    organizationId: membership?.organizationId,
                    organizationName: membership?.organization?.name,
                    role: membership?.role,
                };
            },
        }),
    ],
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
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
});
