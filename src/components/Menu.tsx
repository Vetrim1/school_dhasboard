import { menuItems } from '@/constants/sidemenu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems?.map((item, index) => (
        <div className='flex flex-col gap-2' key={item.title}>
          <span className='hidden lg:block text-gray-400 font-light my-4'>{item.title}</span>
          {item?.items?.map((item, index) => (
            <div key={item.label}>
              <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className='hidden lg:block'>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu