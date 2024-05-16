import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-20 w-full border-t-2 border-slate-200 p-4 flex justify-center'>
      <Button className='flex justify-between items-center' variant={"ghost"}>
        <Image src={"/as.svg"} alt='American Samoa' width={25}
          height={25} className='mr-4 rounded-md'/>
         American Samoa
      </Button>
      <Button className='flex justify-between items-center' variant={"ghost"}>
        <Image src={"/it.svg"} alt='Italy' width={25}
          height={25} className='mr-4 rounded-md'/>
         Italy
      </Button>
      <Button className='flex justify-between items-center' variant={"ghost"}>
        <Image src={"/ch.svg"} alt='Switzerland' width={25}
          height={25} className='mr-4 rounded-md'/>
         Switzerland
      </Button>
      <Button className='flex justify-between items-center' variant={"ghost"}>
        <Image src={"/in.svg"} alt='India' width={25}
          height={25} className='mr-4 rounded-md'/>
         India
      </Button>
      <Button className='flex justify-between items-center' variant={"ghost"}>
        <Image src={"/de.svg"} alt='Germany' width={25}
          height={25} className='mr-4 rounded-md'/>
         Germany
      </Button>
    </div>
  )
}

export default Footer;