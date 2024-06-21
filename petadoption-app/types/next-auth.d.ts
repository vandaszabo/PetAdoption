import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
  }

  interface Pet {
    type: string,
    name: string,
    breed: string | null,
    age: number,
    isMale: boolean
  }
}