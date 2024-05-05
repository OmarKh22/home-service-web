import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, SearchCheck, SearchCode } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center flex-col pt-14 pb-7'>
        <h2 className='font-bold text-[46px] text-center'>Find Home <span className='text-primary'>Service / Repair</span> Near You</h2>
        <h2 className='text-gray-400 text-xl'>Explore Best Home Service & Repaire Near You</h2>
        <div className='mt-4 flex items-center'>
            <Input placeholder='Search ...' 
            className='rounded-full md:w-[350px]'/>
            <Button className='rounded-full'>
                <Search className='w-5 h-5'/>
            </Button>
        </div>
    </div>
  )
}

export default Hero