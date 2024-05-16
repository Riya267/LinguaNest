'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

type SidebarItemsProps = {
  label: string;
  href: string;
  src: string;
}

const SidebarItems = ( { label, href, src } : SidebarItemsProps) => {
    const pathName = usePathname();
    const isActive = pathName === href;
  return (
        <Button variant={isActive ? "secondaryOutline": "basic"} className='px-6 w-full flex justify-start my-5' asChild>
            <Link href={href}>
                <div className='mr-4'>
                    <Image src={src} alt={label} width={20} height={20}/>
                </div>
                {label}
            </Link>
        </Button>
  )
}

export default SidebarItems;