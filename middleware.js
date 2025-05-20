

import {  clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


const isProctectedRoute = createRouteMatcher([

   "/onboarding(.*)",
   "/organisation(.*)",
   "/project(.*)",
   "/issue(.*)",
   "/sprint(.*)",

]);

export default clerkMiddleware( (auth,req)=>{
    // If the user is not signed in and is trying to access a protected route, redirect them to the sign-in page
   if( !auth().userId && isProctectedRoute(req) ) {
     return  auth().redirectToSignIn();
   }
    
   

  
}
) ;


export const config = {
  matcher: [
    // Skip Next.js internals and all static  files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    
  ],
};

// write about protected routes