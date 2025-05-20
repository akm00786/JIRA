

import AccordionComponent from "@/components/AccordionComponent";
import CompanyCourousal from "@/components/CompanyCourousal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Calendar, ChevronRight, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const features=[
  {
    title: "Intuitive Kanban Boards",
    description: "Visualise your workflow and optimise team productivity with our intuitive kanban boards.",
    icon: Layout
  },
  {
    title: "Powerful Sprint Planning",
    description: "Plan and manage your sprints with ease using our powerful sprint planning tools.",
    icon: Calendar
  },
  {
    title: "Comprehensive Reporting",
    description: "Gain insights into your team's performance with our comprehensive reporting features.",
    icon: BarChart
  }
];


export default function Home() {
  
  return (
   // hero
   <>
   <section className="container mx-auto" >
    <h1 className="text-6xl sm:text-7xl gradient-title   font-extrabold text-center">Streamline Your Workflow <br/>
    <span className="flex items-center  justify-center">
      with{" "}
      <Image 
        src={"/logo2.png"}
        alt="xcrum logo"
        width={400}
        height={80}
        className="h-40  w-auto object-contain ml-4  "
      />
    </span>
    </h1>
    <p className="text-center text-xl text-gray-300 ">Empower your team with our intuitive project managament solution</p>

   <div className="flex justify-center items-center mt-10">
   <Link href="/onboarding" >
    <Button size="lg" className={'mr-4'}>
      Get Started <ChevronRight size={18} className="ml-1" />
    </Button>
    </Link>
    <Link href="#feutures" >  
    <Button size="lg" variant="outline" className={'mr-4'}>
      Learn More 
    </Button>
    </Link>
   </div>
   </section>

   <section>
    <div>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl  text-center mt-18 mb-8 font-extrabold bg-gradient-to-br from-blue-500 via-blue-100 to-blue-400 bg-clip-text tracking-tight text-transparent" id="feutures">
           Key Feutures
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-8 mb-16">
        {
        features.map((feature , index) => (


          <Card key={index} >
     <CardHeader>
      <feature.icon className="h-8 w-8 mb-6 " />
        <CardTitle>{feature.title} </CardTitle>
        <CardDescription className="mt-4">{feature.description}</CardDescription>
     </CardHeader>
          </Card>


          
        ))
        }

      </div>
    </div>
   </section>

   <div>
    <h3 className="text-xl  sm:text-2xl lg:text-3xl  text-center mt-18 mb-8 font-extrabold ">Trusted by Industry Leaders</h3>
     
     <CompanyCourousal/>
  
   </div>

   <section className=" px-12 mb-12 bg-gray-900">
   <h3 className=" pt-12 text-xl sm:text-2xl lg:text-3xl  text-center mt-18 mb-8 font-extrabold ">Frequently Asked Questions</h3>
    <AccordionComponent/>
   </section>

   <section className="pt-14 pb-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using ZCRUM to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
   </>
   
  )

}

// app is home folder
// page.jsx  -- >> this is the main page    www.../
// layout.js -- >> this is the main layout for the whole app

//_____________________________________________________________________________________________________

// next js is a framework for react js
// it has server side rendering(where the server renders the react page and sends html to the client for fast)
// it has routing (based on the file structure)


// tailwind css framwork
// shadcn a component library for tailwind css + icons

//_____________________________________________________________________________________________________


//flow of pages  -- ROUTING

// routing -- single page application
// next js - file based routing in app directory
// _folder  let it be no-route folder
// (folder) group routes without affection inner routes
// folder1/folder2/  -- nested routes

// [[...sign-in]] global catch
// nestit like sign-in/[[...sign-in]]  this will allow signin/anything
// [] dynamic routing
// project/[projectId]

  //a route folder has a 
  // wrapper file(layout.js) , 
  // page for that route(page.jsx)
  // loading file (loading.js) for loading state
  // error file (error.js) for error state
  // not-found file ( ) for not found state in app route

//_____________________________________________________________________________________________________


// auth-clerk  -- protecting routes
//signout--signinbutton
// signedin -- userbutton
//signIn   -- page
//signOut  --  page

// use middlewtrae to protect routes to REDIRECT TO SIGN IN PAGE

// forceRedirectUrl='/onboarding' for loader


// added CLERK_SIGN_IN_URL == /sign-in  / sign-out / onboarding (after sign-in) url in .env 
// and sign-in route to take on sign in componenet rather than external link to sign in
// added sign out route to take on sign out componenet rather than external link to sign outx 
// 
// CLERK CAN CRETE ORGANISATION ,  INVITE , BE A MEMBER OF ORGANISATION
//_____________________________________________________________________________________________________


//  N E O N      --   Neon is a cloud-native Postgres solution
//  P R I S M A  --   Primarily used as  ORM ( Object-Relational Mapper ) ,
//                providing a convenient way to interact with databases without writing raw SQL
  
 //  prisma install
 // Add neon database_url in .env
 // npx prisma init  // make prisma file connecting to database_url
 // create midels
 // npx prisma generate  
 // npx prisma migrate dev --- generate sql code and crate table finally in neon
 // use prisma client to query  the database

//_____________________________________________________________________________________________________


