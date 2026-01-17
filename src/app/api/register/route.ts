export const runtime = 'nodejs'

import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json()

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'Missing fields' },
                { status: 400 }
            )
        }

        const existing = await prisma.user.findUnique({
            where: { email },
        })

        if (existing) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 409 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        })

        return NextResponse.json({ user })
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        )
    }
}
