
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";  // Asegúrate de que esto esté importado

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      }
    })
  ]
});

