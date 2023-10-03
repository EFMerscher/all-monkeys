import * as React from 'react'
import Image from 'next/image'
import instagram from '@/assets/instagram-logo.png'
import x from '@/assets/x-logo-twitter-logo-1.png'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-yellow-500 border-zinc-500 p-6 flex justify-between items-center">
      <div>
      <p>Primatarquia © 2021</p>
      <p>Developed by @ed_zera</p>
      </div>
      <div className="flex gap-4">
      <Link href="instagram.com/primatarquia" target="_blank" passHref>
      <Image 
        src={instagram}
        width={30}
        height={30}
        alt="Monkey icon"
        className='flex relative right-0'
      />
      </Link>
      <Link href="x.com/primatarquia" target="_blank" passHref>
      <Image 
        src={x}
        width={30}
        height={30}
        alt="Monkey icon"
        className='flex relative right-0'
      />
      </Link>
      </div>
      
    </footer>
  )
}