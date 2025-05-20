"use client";

import {  OrganizationList , useOrganization    } from '@clerk/nextjs'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Onboarding = () => {

    const{organization} = useOrganization() // get the current active org from switcher if 1 org then that
    const router = useRouter()



   useEffect( () => {
    
      if (organization) {
        // Set the organization as active in Clerk session
       // Redirect user
        router.push(`/organization/${organization.slug}`);
      } 
    

   
  }, [organization]);
      

    

    
  return (
    <div className='flex  justify-center pt-0 '>
        <OrganizationList hidePersonal
          afterCreateOrganizationUrl={"/organization/:slug"}
          afterSelectOrganizationUrl={"/organization/:slug"}
        />
    </div>
  )
}

export default Onboarding