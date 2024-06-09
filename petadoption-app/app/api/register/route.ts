import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import { registerSchema, TSignUpSchema } from '@/schemas/registerSchema';


export async function POST(req: Request) {
  try {
    const body: TSignUpSchema = await req.json();

    // Validate the request body
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ message: 'Invalid input', errors: result.error.format() }, { status: 400 });
    }

    const { name, email, password } = result.data;
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordhash: hashedPassword,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
