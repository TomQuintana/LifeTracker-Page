// /app/api/auth/[...nextauth]/route.ts

import axios from 'axios';
import { NextResponse } from 'next/server';

// Exporta un handler para el método POST (login)
export async function POST(req: Request) {
  console.log(req.body)
  const { email, password } = await req.json();
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      email,
      password
    });
    console.log(response.data);


    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
    }


    return NextResponse.json({ message: 'Autenticación exitosa' });
  } catch (error) {
    return NextResponse.json({ error: 'Error en la autenticación' }, { status: 400 });
  }
}

// Exporta un handler para el método GET (sesión)
export async function GET(req: Request) {
  try {
    // Aquí va tu lógica para obtener la sesión
    const session = getSessionFromCookies(req); // ejemplo de función para obtener la sesión

    if (!session) {
      return NextResponse.json({ message: 'No hay sesión activa' }, { status: 404 });
    }

    return NextResponse.json({ session });
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener la sesión' }, { status: 500 });
  }
}

// Lógica para obtener sesión desde las cookies
function getSessionFromCookies(req: Request) {
  const cookies = req.headers.get('cookie');
  // Lógica para leer la cookie de sesión y devolver la sesión
  return null; // ejemplo: si no hay sesión activa
}

