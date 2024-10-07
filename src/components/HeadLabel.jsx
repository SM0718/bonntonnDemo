import React from 'react'
// import TypeAnimations from './TypeAnimations'


function HeadLabel({toggleModal = "", children, bannerPic}) {
  return (
    <div className='w-full h-screen bg-cover bg-top bg-no-repeat flex justify-start items-end relative bg-fixed
    ' style={{backgroundImage: `url(${bannerPic})`}}>
         {/* <div className="w-3/4 mx-auto m-16 flex flex-col gap-4 items-center z-40 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black/50 before:py-6 before:rounded-xl p-2">
            <h2 className='headings text-center text-2xl lg:text-5xl font-medium text-white px-1 md:px-4 b z-50 py-4'><TypeAnimations /></h2>
            <p className='hidden text-center md:flex text-base md:text-xl text-white px-4 b z-50'>
            Luxury gift boxes that are thoughtfully curated to celebrate moments, create memories, and deepen connections.</p>
            <p className='md:hidden flex text-white text-center text-base px-1 b z-50'>Luxury gift boxes that are thoughtfully curated to celebrate moments, create memories, and deepen connections.</p>
          </div> */}

          { children }
      </div>
  )
}

export default HeadLabel