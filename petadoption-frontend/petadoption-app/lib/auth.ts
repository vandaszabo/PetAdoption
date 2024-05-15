import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
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
            
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        
              if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          })

    ]

}