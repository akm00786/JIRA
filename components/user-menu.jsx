'use client'// This is a client component

import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
  return (
    <UserButton  
          appearance={{
              elements:{
                avatarBox:{
                  width:'40px',
                  height:'40px',
                },
              },
            }}
          >

            <UserButton.MenuItems>
              <UserButton.Link  
              label="My Organisations" 
              labelIcon={<ChartNoAxesGantt size={15}/>}
              href='/onboarding'
             />
             <UserButton.Action label="manageAccount"/>
            </UserButton.MenuItems>


        </UserButton>
  )
}

export default UserMenu