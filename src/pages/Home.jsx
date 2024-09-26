import React from 'react'
import HeadLabel from '../components/HeadLabel'
import Button from '../components/Button'
import { boxes } from '../utils/boxes' 
import Contact from '../components/Contact'
import TypeAnimations from '../components/TypeAnimations'
import { NavLink } from 'react-router-dom'

function Home() {

  
  return (
    <div className='flex flex-col items-center justify-center'>
        <HeadLabel bannerPic={'./banner.webp'}>
        <div className="w-3/4 mx-auto m-16 flex flex-col gap-4 items-center z-40"
           >
            <h2 className='headings text-center text-lg md:text-xl lg:text-5xl text-white px-1 md:px-4 headings'><TypeAnimations /></h2>
            <p className='hidden text-center md:flex para text-sm md:text-xl text-white px-4 para'>
            Luxury gift boxes, thoughtfully curated to celebrate moments, create memories, and deepen connections.</p>
            <p className='md:hidden flex text-white text-center para text-base px-1 para'>Luxury gift boxes, thoughtfully curated to celebrate moments, create memories, and deepen connections.</p>
            {/* {
                toggleModal && <Button onClick={toggleModal} className={'bg-black hover:bg-[#393939] cursor-pointer transition duration-400 text-white mx-1 md:mx-4 px-4 py-2 rounded-lg text-xs md:text-lg'}>View Catalouge</Button>
            } */}
          </div>
        </HeadLabel>
        
        <div className='w-full flex flex-col gap-4 descText my-20 '>
          <h1 className='text-2xl md:text-5xl text-center'>Make It Your Own</h1>
          <div className='flex justify-evenly gap-8 flex-wrap my-8'>
            {
              boxes.map(item => <div key={item.desc} className='flex flex-col items-center gap-4'>
                <img className='rounded-full size-[70px] md:size-[200px]' src={item.pic}/>
                <div className='flex flex-col items-center gap-2'>
                  <p className='text-sm md:text-xl desc font-semibold'>{item.desc}</p>
                  <p className='text-xs md:text-lg para'>{item.moq}</p>
                </div>
              </div>)
            }
          </div>
        </div>
        

        <HeadLabel bannerPic={'./banner2.webp'}>
        <div className="w-3/4 mx-auto m-16 flex flex-col items-center gap-4 z-40"
           >
            <h2 className='headings text-center text-lg md:text-xl lg:text-5xl text-white px-1 md:px-4'>DIWALI EDIT</h2>
            <p className='hidden text-center md:flex para text-sm md:text-xl text-white px-4'>
            Exquisite Diwali gift boxes, curated to celebrate success, foster connections, and leave a lasting impression on your corporate partners.</p>
            <p className='md:hidden flex text-white text-center para text-base px-1'>Exquisite Diwali gift boxes to celebrate success and impress corporate partners.</p>
            <div className='flex flex-col md:flex-row gap-4 my-4'>
               <NavLink to={'https://publuu.com/flip-book/668043/1488146'}>
                <Button className={'bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-xs md:text-lg'}>Gifting Pre-Sets</Button>
                </NavLink>
               <Button className={'bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-xs md:text-lg'}>Personal Gifting</Button>
               <Button className={'bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-xs md:text-lg'}>Corporate Gifting</Button>
            </div>
            
          </div>
          </HeadLabel>

        <HeadLabel bannerPic={'./banner.webp'}>
        <div className="w-3/4 mx-auto  m-16 flex flex-col justify-end items-center gap-4 z-40">
            <h2 className='headings text-center text-lg md:text-xl lg:text-5xl text-white px-1 md:px-4'>BIRTH ANNOUNCEMENTS</h2>
            <p className='hidden text-center md:flex para text-sm md:text-xl text-white px-4'>
            Elegant birth announcements, exquisitely designed to celebrate new beginnings, share your joy, and create cherished memories with family and friends.</p>
            <p className='md:hidden flex text-white text-center para text-base px-1'>Elegant birth announcements, designed to celebrate new beginnings and share your joy with loved ones.</p>
            <div className='my-4'>
               <Button className={'bg-white hover:bg-black transition duration-500 cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-xs md:text-lg'}>View Cataloge</Button>
            </div>
            
          </div>
          </HeadLabel>

        <HeadLabel bannerPic={'./banner2.webp'}>
        <div className="w-3/4 mx-auto  m-16 flex flex-col items-center gap-4 z-40"
           >
            <h2 className='headings text-center text-lg md:text-xl lg:text-5xl text-white px-1 md:px-4'>WEDDINGS</h2>
            <p className='hidden text-center md:flex para text-sm md:text-xl text-white px-4'>
            Opulent wedding announcements, elegantly crafted to showcase your love and leave an unforgettable impression on your guests.</p>
            <p className='md:hidden text-center flex para text-sm md:text-xl text-white px-4'>
            Opulent wedding announcements, crafted to showcase your love and leave an unforgettable impression.</p>
            <div className='my-4'>
               <Button className={'bg-white hover:bg-black transition duration-500 cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-xs md:text-lg'}>View Cataloge</Button>
            </div>
            
          </div>
          </HeadLabel>

            <div className='w-full flex flex-col items-center gap-10 my-20 mx-auto'>
              <h1 className='text-3xl md:text-5xl headings text-center'>Write To Us Below</h1>
              <Contact />
            </div>
    </div>
  )
}

export default Home