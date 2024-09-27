import React from 'react'
import Facebook from '../svg/Facebook'
import Instagram from '../svg/Instagram'
import Linkdin from '../svg/Linkdin'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full px-8 py-8 border-t-4">

      {/* <div className='w-full flex flex-col sm:flex-row mx-4 justify-center gap-[50px] pt-16 font-bold para'>
        <p className='text-center'>Privacy Policy</p>

        <p className='text-center'>Terms & Conditions</p>

        <p className='text-center'>Contact Us</p>
      </div>

      <div className='py-16'>
        <p className='w-full px-4 para font-medium mx-auto text-center'>&copy; {currentYear} Bonntonn Gourmet Gifting Studio. All rights reserved.</p>
      </div> */}

      <div className='w-full flex flex-col lg:flex-row gap-8 justify-between lg:p-4'>

        <div className='w-full lg:w-1/4 flex flex-col items-center gap-4 my-4'>

          <div className='w-1/2'>
            <Logo />
          </div>
          
          <div className='lg:ml-10 mx-auto flex  justify-between  items-center gap-2 relative w-full lg:w-3/4'>
            <div className='w-full flex items-center justify-evenly lg:justify-evenly'>
              <NavLink to={'https://www.zomato.com/kolkata/bonntonn-gourmet-gift-studio-alipore'}>
                <div className='flex items-center'>
                  <img className='w-[44px]' src='./zomato.png'/>
                </div>
              </NavLink>
              <NavLink to={'https://www.swiggy.com/city/kolkata/bonn-tonn-gourmet-opposite-papillon-flower-shop-alipore-rest705986'}>
                <div className=''>
                  <img className=' w-[38px] rounded-xl' src='./swiggy.png'/>
                </div>
              </NavLink>
          </div>
           
            {/* <div className='w-full'> */}
            <NavLink to={'https://bonntonn.petpooja.com/'}>
              <Button className={`w-[250px] px-5 py-1 transition duration-500 mx-auto font-semibold rounded-xl border border-[#1F0B00] text-[#1F0B00] text-lg hover:bg-[#454545] hover:text-white`}>
                          Order Directly
                      </Button>
            </NavLink>
            {/* </div> */}
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-center font-bold headings'>Full Address Of The Company</h1>
          <p className='w-full lg:w-[200px] text-center para'>Flat 2B, Alipore Residency, 3, Burdwan Rd, Near State Bank, Alipore, Kolkata, West Bengal 700027</p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='font-bold text-center headings text-xl'>For You</div>

          <div className='flex flex-col gap-2 text-center para'>
            <p>About Us</p>
            <p>Return Policy</p>
            <p>Shipping Info</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 text-center'>
                  <h1 className='font-bold text-center text-xl headings'>Contact Us</h1>

                  <div className=''>
                    <p className='para'>9874451300</p>
                    <p className='para'>bonntonn.kolkata@gmail.com</p>
                  </div>

                  <div className='w-full flex justify-center gap-[50px]'>
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
        </div>
      </div>



      <div className='py-16'>
        <p className='w-full px-4 para font-medium mx-auto text-center para'>&copy; {currentYear} Bonntonn Gourmet Gifting Studio. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer