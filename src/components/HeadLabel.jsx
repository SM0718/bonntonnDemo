import React from 'react'
// import TypeAnimations from './TypeAnimations'


function HeadLabel({toggleModal = "", children, bannerPic}) {
  return (
    <div className='w-full h-screen bg-cover bg-top bg-no-repeat 
    flex justify-start items-end relative before:content-[""] before:absolute before:w-full before:h-full before:bg-black/25 bg-fixed
    ' style={{backgroundImage: `url(${bannerPic})`}}>
          { children }
      </div>
  )
}

export default HeadLabel