import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
      <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
          <div className='flex items-center gap-x-3'>
            <Image src='/smilyface.jpg' alt={'smilyface'} width={50} height={50}/>
            <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>LinguaNest</h1>
          </div>
      </div>
    </header>
  )
}

export default Header;