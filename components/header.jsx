import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import {  PenBox } from 'lucide-react'
import UserMenu from './user-menu'
import { checkUser } from '@/lib/checkUser'
import Loader from './Loader'

const  Header = async() => {

   await checkUser();
  return (
    <header className='container mx-auto '>

      <nav className='py-6 px-0 lg:px-4 flex items-center justify-between '>
        <Link href={"/"}>
        <Image src={'/logo.png'} alt='Xcrum Logo' width={200} height={30} className='h-30 w-auto'/>
        </Link>

     <div className='flex items-center gap-2 lg:gap-4'>

      <Link href={'/project/create'}>
        <Button variant={'destructive'}  >
          <PenBox/>
          <span>Create Project</span>
        </Button>
      </Link>

      <SignedOut>
        <SignInButton forceRedirectUrl='/onboarding'>  
          <Button variant='outline' >Login</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserMenu/>
      </SignedIn>

     </div>
      
      </nav>
      <Loader/>

    </header>
    
  )
}

export default Header