import React from 'react'
import Netflix_Logo from '../utils/assets/images/Netflix_Logo.png'

const Header = () => {
  return (
      <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10'>
          <img src={Netflix_Logo} alt='logo_image' className='w-44'/>
      </div>
  )
}

export default Header