import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const pets = await prisma.pet.findMany();

    return NextResponse.json(pets, { status: 200 });
  } catch (error) {
    console.error('Error listing pets:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
