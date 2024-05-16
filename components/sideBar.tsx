import { cn } from '@/lib/utils';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SidebarItems from './sideBarItem';
import { Button } from './ui/button';

type SidebarProps = {
  className?: string;
}

const Sidebar = ( { className } : SidebarProps) => {
  return (
    <aside className={cn(`lg:fixed left-0 top-0 px-2 flex-col lg:w-[256px] h-full`, className)}>
      <Link href={"/dashboard"}>
        <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-20'>
            <div className='flex items-center gap-x-3'>
              <Image src='/smilyface.jpg' alt={'smilyface'} width={50} height={50}/>
              <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>LinguaNest</h1>
            </div>
        </div>
      </Link>

      <div>
        <SidebarItems label='LEARN' href='/dashboard' src='./learn.svg' />
        <SidebarItems label='LEADERBOARD' href='/leaderboard' src='./leaderboard.svg' />
        <SidebarItems label='QUESTS' href='/quests' src='./quests.svg' />
        <SidebarItems label='SHOP' href='/shop' src='./shop.svg' />
      </div>

      <div className='fixed bottom-0'>
        <Button variant={"ghost"} className='text-green-500' asChild>
          <Link href="/api/auth/logout">
            <div className='mr-2'>
              <Image src='/logout.svg' alt={'logout'} width={30} height={30}/>
            </div>
            Logout
          </Link>
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar;