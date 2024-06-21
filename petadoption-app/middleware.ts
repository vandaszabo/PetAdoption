import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {

  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (req.nextUrl.pathname.startsWith('/admin') && token?.role !== 'admin') {
      // If the user is not an admin, redirect to a 403 page or home page
      return NextResponse.redirect(new URL('/403', req.url));
    }

    // Allow the request to continue if authenticated and authorized
    return NextResponse.next();
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.redirect(new URL('/error', req.url)); // Redirect to a generic error page
  }
}
