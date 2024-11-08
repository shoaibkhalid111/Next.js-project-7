import React from 'react'
import Link from 'next/link'

const Header = (data:any) => {
  return (
    <>
    <div className= "links-parent">
        <ul className='links'>
            <li className='link'><Link href="/">Works</Link></li>
            <li className='link'><Link href="/">Blogs</Link></li>
            <li className='link'><Link href="/">Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
