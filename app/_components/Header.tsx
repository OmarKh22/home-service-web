import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='shadow-sm pt-7 pl-5 pr-5 flex justify-between items-center '>
    <div className='flex items-center gap-8 '>
        <Image src='./logo.svg' alt='logo'
        width={150} height={100} className='pb-14'/>
        <div className='md:flex items-center gap-5 transition-all hidden pl-16'>
            <Link href='/' className='text-[20px] hover:scale-105 hover:text-primary'>Home</Link>
            <Link href='/servies' className='text-[20px] hover:scale-105 hover:text-primary'>Servies</Link>
            <Link href='/about-us' className='text-[20px] hover:scale-105 hover:text-primary'>About Us</Link>
        </div>
    </div> 
        <div>
        <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Header