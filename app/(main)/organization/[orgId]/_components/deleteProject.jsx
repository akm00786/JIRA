"use client";

import { deleteProject } from '@/actions/project';
import useFetch from '@/hooks/use-fetch';
import { useOrganization } from '@clerk/nextjs';
import { Loader, Trash } from 'lucide-react'
import React, { useEffect } from 'react'
import { toast } from 'sonner';

const DeleteProject = ( { projectId , orgId  } ) => {


    const {  membership , organization } = useOrganization();

     const {
        loading ,
        error ,
        data : response ,
        fn : deleteProjectFn,
      } = useFetch( deleteProject ) ;  
  
 
    const submitHandler = async () => {

       
         deleteProjectFn( projectId , orgId , membership.role ) ;
         
    }

     useEffect( () => {
      
        if ( response ) {
            toast.success(  "Project deleted successfully!" ) ;
            setTimeout( () => {
                window.location.reload() ;
            }, 1000 ) ;
        }
      }, [loading] ) ;

  return (
    <button className='cursor-pointer' onClick={submitHandler}>{loading?<Loader/> :<Trash/>}</button>
  )
}

export default DeleteProject