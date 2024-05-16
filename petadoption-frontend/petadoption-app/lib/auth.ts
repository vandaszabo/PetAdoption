import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import db from "./db";
const bcrypt = require('bcrypt');
import { User } from "@prisma/client";

export const authConfig: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        // Check if the user exists
        const dbUser = await db.user.findFirst({
          where: { email: credentials.email }
        });

        if (!dbUser) {
          return null;
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(credentials.password, dbUser.passwordhash);

        if (passwordMatch) {
          return dbUser;
        }

        return null;
      }
    })
  ]
}