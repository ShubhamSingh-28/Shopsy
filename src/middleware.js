import {clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server'
 

const isProtectedRoute = createRouteMatcher([
  '/',
  '/products/:id',
  '/cart'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/products','/cart', '/(api|trpc)(.*)'],
};