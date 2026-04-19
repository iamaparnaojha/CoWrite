import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/icons/logo.svg'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'


const Header = ({children,className}: HeaderProps) => {
  return (
    <div className={cn("header",className)}>
        <Link href='/' className='md:flex-1'>
        <Image
        src={logo}
        alt='Logo'
        width={120}
        height={32}
        className='hidden md:block' />
        <Image
        src={logo}
        alt='Logo'
        width={64}
        height={64}
        className='mr-2 md:hidden' />
        </Link>
        <div className='flex items-center gap-2 md:gap-5'>
          <ThemeToggle />
          {children}
        </div>
      
    </div>
  )
}

export default Header
