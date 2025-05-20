

import { getOrganization } from '@/actions/organisation'
import OrgSwitcher from '@/components/org-switcher';
import React from 'react'
import ProjectList from './_components/projectList';

const Organisation = async ( {params}  ) => {
  const { orgId } = params ;

  
  


  const organization  = await getOrganization( orgId ) ;


  if( !organization ){
    return(
      <div className='text-center text-2xl lg:text-4xl'>Organisation not found</div>
    )
  }

  return (
    <div className='container mx-auto px-12'>
      <div className='mb-4 flex flex-col sm:flex-row items-start justify-between'>
      <h1 className='text-2xl lg:text-4xl font-bold pb-2'>{organization.name}&rsquo;s Projects</h1> 
      <OrgSwitcher/>     
      </div>


    <div className='mb-4'>
    <ProjectList orgId={organization.id} /> 
    </div>
    <div className='mt-8'>
      show user assigned and reported issues here 
    </div>
    </div>
  )
}

export default Organisation;