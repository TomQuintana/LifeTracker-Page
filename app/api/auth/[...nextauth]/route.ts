import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// const handler = NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//       state: false
//     })
//   ]
// })
//
// export {handler as GET, handler as POST}
//

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Custom Provider',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post('http://localhost:3001/api/user/login', {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (response.data.token) {
            // Si las credenciales son correctas, devolver el usuario
            return { 
              token: response.data.token,
              id: '1111',
              name: 'tom',
              email: 'tom@tom.com',
            };
          } else {
            // Si las credenciales no son válidas, retornar null
            return null;
          }
        } catch (error) {
          console.error('Error en la autenticación:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('token', token);
      console.log('user', user);
      
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      console.log('sessin',session.user);
      
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login', // Redirige siempre a /login en lugar de la página predeterminada de NextAuth
  },
});

export { handler as GET, handler as POST };
