import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
const bcrypt = require('bcrypt');

export async function POST(request: NextRequest): Promise<any> {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return new NextResponse("Missing email or password", { status: 400 });
        }

        // Check if the user with the provided email exists
        const dbUser = await db.user.findFirst({
            where: { email: email }
        });

        if (!dbUser) {
            return new NextResponse("User not found", { status: 404 });
        }

        // Compare the provided password with the hashed password from the database
        const passwordMatch = await bcrypt.compare(password, dbUser.passwordhash);

        if (passwordMatch) {
            return new NextResponse("Successful Login", { status: 200 })
        } else {
            return new NextResponse("Invalid password", { status: 400 });
        }
    } catch (error) {
        console.error("Error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }

}
