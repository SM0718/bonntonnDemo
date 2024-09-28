import React from 'react'
import HeadLabel from '../components/HeadLabel'
import Button from '../components/Button'
import { boxes } from '../utils/boxes' 
import Contact from '../components/Contact'
import TypeAnimations from '../components/TypeAnimations'
import { NavLink } from 'react-router-dom'
import Whatsapp from '../svg/Whatsapp'

function Home() {

  
  return (
    <div className='flex flex-col items-center justify-center relative'>

        <HeadLabel bannerPic={'./mainBanner.webp'}>
        <div className="w-3/4 mx-auto m-16 flex flex-col gap-4 items-center z-40"
           >
            <h2 className='headings text-center text-2xl lg:text-5xl font-medium text-white px-1 md:px-4 b'><TypeAnimations /></h2>
            <p className='hidden text-center md:flex para text-sm md:text-xl text-white px-4 b'>
            Luxury gift boxes that are thoughtfully curated to celebrate moments, create memories, and deepen connections.</p>
            <p className='md:hidden flex text-white text-center para text-base px-1 b'>Luxury gift boxes that are thoughtfully curated to celebrate moments, create memories, and deepen connections.</p>
          </div>
        </HeadLabel>
        

        <HeadLabel bannerPic={'./diwali.webp'}>
        <div className="w-3/4 mx-auto m-16 flex flex-col i lbtems-center gap-4 z-40"
           >
            <h2 className='headings text-center text-2xl lg:text-5xl text-white px-1 md:px-4 b'>DIWALI EDIT</h2>
            <p className='hidden text-center md:flex para text-sm md:text-xl text-white px-4 b'>
            Exquisite Diwali gift boxes, curated to celebrate success, foster connections, and leave a lasting impression on your corporate partners.</p>
            <p className='md:hidden flex text-white text-center text-base px-1 b'>Exquisite Diwali gift boxes to celebrate success and impress corporate partners.</p>
            <div className='flex flex-col justify-center items-center md:flex-row gap-4 my-4'>
               <NavLink to={'https://publuu.com/flip-book/668043/1488146'}>
                <Button className={'bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-base b'}>Gifting Pre-Sets</Button>
                </NavLink>
               <Button className={'bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-base b'}>Personal Gifting</Button>
               <Button className={'bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-base b'}>Corporate Gifting</Button>
            </div>
            
          </div>
          </HeadLabel>

        <HeadLabel bannerPic={'./diwaliActual.webp'}>
        <div className="w-3/4 mx-auto  m-16 flex flex-col justify-end items-center gap-4 z-40">
            <h2 className='headings text-center text-2xl lg:text-5xl text-white px-1 md:px-4 b'>BIRTH ANNOUNCEMENTS</h2>
            <p className='hidden text-center md:flex text-sm md:text-xl text-white px-4 b'>
            Elegant birth announcements, exquisitely designed to celebrate new beginnings, share your joy, and create cherished memories with family and friends.</p>
            <p className='md:hidden flex text-white text-center para text-base px-1 b'>Elegant birth announcements are designed to celebrate new beginnings and share your joy with loved ones.</p>
            <div className='my-4'>
               <Button className={'bg-white hover:bg-black transition duration-500 cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-lg b'}>View Catalogue</Button>
            </div>
            
          </div>
          </HeadLabel>

        <HeadLabel bannerPic={'./wedding.webp'}>
        <div className="w-3/4 mx-auto  m-16 flex flex-col items-center gap-4 z-40"
           >
            <h2 className='headings text-center text-2xl lg:text-5xl text-white px-1 md:px-4'>WEDDINGS</h2>
            <p className='hidden text-center md:flex para text-sm md:text-xl text-white px-4'>
            Opulent wedding announcements, elegantly crafted to showcase your love and leave an unforgettable impression on your guests.</p>
            <p className='md:hidden text-center flex para text-base md:text-xl text-white px-4'>
            Opulent wedding announcements, crafted to showcase your love and leave an unforgettable impression.</p>
            <div className='my-4'>
               <Button className={'bg-white hover:bg-black transition duration-500 cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-4 py-4 rounded-xl text-lg b'}>View Catalogue</Button>
            </div>
            
          </div>
          </HeadLabel>

          <div className='w-full flex flex-col gap-4 b my-20 px-2'>
          <h1 className='text-2xl md:text-5xl text-center'>Make It Your Own</h1>
          <div className='flex justify-evenly gap-8 flex-wrap my-8'>
            {
              boxes.map(item => <div key={item.desc} className='flex flex-col items-center gap-4 b'>
                <img className='rounded-full size-[80px] md:size-[200px]' src={item.pic}/>
                <div className='flex flex-col items-center gap-2'>
                  <p className='text-lg md:text-xl headings font-semibold b'>{item.desc}</p>
                  <p className='text-sm md:text-lg para text-slate-500 b'>{item.moq}</p>
                </div>
              </div>)
            }
          </div>
        </div>

            <div className='w-full flex flex-col items-center gap-10 my-20 mx-auto'>
              <h1 className='text-3xl md:text-5xl text-center b'>Write To Us Below</h1>
              <Contact />
            </div>

            <Whatsapp occasion={'Bulk Ordering'}/>
    </div>
  )
}

export default Home