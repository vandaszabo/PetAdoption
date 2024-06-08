import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

type CreateRequestBody = {
  type: string;
  breed: string | null;
  name: string;
  age: number;
  isMale: boolean;
};

export async function POST(req: Request) {
  try {
    const body: CreateRequestBody = await req.json();
    const { type, breed, name, age, isMale } = body;

    // Create the new pet
    const newPet = await prisma.pet.create({
      data: {
        type,
        breed,
        name,
        age,
        isMale
      },
    });

    return NextResponse.json(newPet, { status: 201 });
  } catch (error) {
    console.error('Error creating pet:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
