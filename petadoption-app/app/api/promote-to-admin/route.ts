import db from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from "next-auth/react";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    // Check if the user is an admin
    if (!session || session.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const { userId }: { userId: string } = req.body;

    // Find the user and update their role
    try {
        const user = await db.user.update({
            where: { id: userId },
            data: { role: 'admin' },
        });
        return res.status(200).json({ message: 'User promoted to admin successfully', user });
    } catch (error) {
        return res.status(404).json({ message: 'User not found' });
    }
}

