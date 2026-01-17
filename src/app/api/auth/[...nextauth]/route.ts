import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                // 🔹 ambil user dari database
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user) {
                    // email tidak terdaftar
                    return null
                }

                // 🔹 bandingkan password hash
                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                )

                if (!isValid) {
                    // password salah
                    return null
                }

                // 🔹 wajib return object user
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name ?? undefined,
                }
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
