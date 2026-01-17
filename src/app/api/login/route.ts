export const runtime = 'nodejs'

import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
    const { email, password } = await req.json()

    if (!email || !password) {
        return NextResponse.json(
            { error: 'Missing credentials' },
            { status: 400 }
        )
    }

    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (!user) {
        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        )
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        )
    }

    const cookieStore = await cookies()

    cookieStore.set({
        name: 'session',
        value: user.id,
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        // secure: true, // aktifkan di production HTTPS
    })

    return NextResponse.json({ success: true })
}
