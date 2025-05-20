"use client" ;
import { getProject } from '@/actions/project';
import useFetch from '@/hooks/use-fetch';
import { useOrganization } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinners';
import SprintCreationForm from '../_components/create-sprint';
import SprintBoard from '../_components/sprint-board';



const ProjectPage = (  ) => {

  const params = useParams() ;
  const projectId = params.projectId ;
 
const {  isLoaded ,  organization } = useOrganization() ;

     const {
        loading ,
        error ,
        data : project ,
        fn : getProjectFn ,
      } = useFetch( getProject ) ; 
      
  useEffect(() => {

   
    if ( organization && projectId ) {
      getProjectFn(   projectId  , organization.id ) ;
      
    }
    
  },[isLoaded])

  useEffect(() => {
    console.log( project ) ;
  },[project] )

   
  return (
    <div>
   
      {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
      {project && (
        <div className='px-8'>
           <SprintCreationForm
              projectTitle={project.name}
              projectId={project.id}
              projectKey={project.key}
              sprintKey={(project.sprints?.length || 0)+1}
              orgId={organization.id}
           />
        {
          project.sprints?.length > 0 ?(
            // srint bioard 
           <SprintBoard
          sprints={project.sprints}
          projectId={project.id}
          orgId={organization.id}
        />
       
          ):(
            <div>Create a sprint from button above</div>
          )
        }
        </div>
      )}
      {error && (
        <div className="text-red-500">
          {error}
        </div>
      )}
      

    </div>
  )
}

export default ProjectPage;