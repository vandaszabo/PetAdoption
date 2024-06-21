import db from '@/lib/db';
import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
    const body = await req.body.json();

    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    const session = await getSession({req});

    if (!session) {
        return NextResponse.json({ message: 'No user session' }, { status: 404 });
    }

    // Check if the user is an admin
    if (session.user.role !== 'admin') {
        return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }


    const { userId }: { userId: string } = body;

    // Find the user and update their role
    try {

        const user = await db.user.update({
            where: { id: userId },
            data: { role: 'admin' },
        });
        return NextResponse.json({ message: 'User promoted to admin successfully', user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

}