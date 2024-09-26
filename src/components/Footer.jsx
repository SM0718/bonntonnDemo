import React from 'react'
import Facebook from '../svg/Facebook'
import Instagram from '../svg/Instagram'
import Linkdin from '../svg/Linkdin'
import { NavLink } from 'react-router-dom'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <div className='w-full flex justify-center gap-[50px] pt-24'>

        <NavLink to={'https://www.facebook.com/BonnTonnGourmet/'} className={'transition duration-300 grayscale hover:grayscale-0'}>
          <Facebook />
        </NavLink>
        
        <NavLink to={'https://www.instagram.com/bonn.tonn/'} className={'transition duration-300 grayscale hover:grayscale-0'}>
          <Instagram />
        </NavLink>
        
        <NavLink to={'https://www.linkedin.com/company/bonntonn/?originalSubdomain=in'} className={'transition duration-300 grayscale hover:grayscale-0'}>
          <Linkdin />
        </NavLink>

      </div>

      <div className='w-full flex flex-col sm:flex-row mx-4 justify-center gap-[50px] pt-16 font-bold para'>
        <p className='text-center'>Privacy Policy</p>

        <p className='text-center'>Terms & Conditions</p>

        <p className='text-center'>Contact Us</p>
      </div>

      <div className='py-16'>
        <p className='w-full px-4 para font-medium mx-auto text-center'>&copy; {currentYear} Bonntonn Gourmet Gifting Studio. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer