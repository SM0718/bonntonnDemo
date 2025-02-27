import React, { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { boxes } from '../utils/boxes';

// Lazy load components for better initial loading
const Button = lazy(() => import('../components/Button'));
const Contact = lazy(() => import('../components/Contact'));
const TypeAnimations = lazy(() => import('../components/TypeAnimations'));
const Whatsapp = lazy(() => import('../svg/Whatsapp'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
  </div>
);

function Home() {
  const [show, setShow] = useState(false);
  const [choice, setChoice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images for smoother transitions
    const imageUrls = [
      './mainBanner.webp',
      './mobileBanner.webp',
      './giftingPreSets.webp',
      './diwaliActual.webp',
      './wedding.webp',
      './diwali.webp',
      './birthPopup.webp',
      './weddingPopup.webp'
    ];

    Promise.all(imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    }))
      .then(() => setIsLoading(false))
      .catch(console.error);
  }, []);

  const isAppleDevice = () => /iPhone|iPad/.test(navigator.userAgent);

  const handlePopup = (e) => {
    setChoice(e);
    setShow(true);
  };

  const handlePopupClose = () => setShow(false);

  const openPDF = (link) => window.open(link, '_blank');

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) return <LoadingSpinner />;

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionClass = `w-full h-screen bg-cover bg-center bg-no-repeat flex justify-start items-end relative ${
    isAppleDevice() ? "bg-scroll" : "bg-fixed"
  }`;

  const overlayClass = "w-3/4 mx-auto m-16 flex flex-col gap-4 items-center z-40 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black/50 before:py-6 before:rounded-xl p-2";

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className='flex flex-col items-center justify-center relative'
    >
      {/* Main Banner Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className={sectionClass}
        style={{backgroundImage: `url('./mainBanner.webp')`}}
      >
        <div className={overlayClass}>
          <h2 className='headings text-center text-2xl lg:text-5xl font-medium text-white px-1 md:px-4 b z-40 py-4'>
            <Suspense fallback={<div>Loading...</div>}>
              <TypeAnimations />
            </Suspense>
          </h2>
          <p className='hidden text-center md:flex text-base md:text-xl text-white px-4 b z-40'>
            Luxury gift boxes that are thoughtfully curated to celebrate moments, create memories, and deepen connections.
          </p>
          <p className='md:hidden flex text-white text-center text-base px-1 b z-40'>
            Luxury gift boxes that are thoughtfully curated to celebrate moments, create memories, and deepen connections.
          </p>
        </div>
      </motion.div>

      {/* Mobile Banner Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className={`${sectionClass} md:hidden`}
        style={{backgroundImage: `url('./mobileBanner.webp')`}}
      >
        <div className={overlayClass}>
          <h2 className='headings text-center text-2xl lg:text-5xl font-medium text-white px-1 md:px-4 b z-40 py-4'>
            <Suspense fallback={<div>Loading...</div>}>
              <TypeAnimations />
            </Suspense>
          </h2>
          <p className='md:hidden flex text-white text-center text-base px-1 b z-40'>
            Luxury gift boxes that are thoughtfully curated to celebrate moments, create memories, and deepen connections.
          </p>
        </div>
      </motion.div>

      {/* Gifting Pre-Sets Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className={sectionClass}
        style={{backgroundImage: `url('./giftingPreSets.webp')`}}
      >
        <div className={overlayClass}>
          <h2 className='hidden md:flex text-center text-2xl lg:text-5xl text-white px-1 md:px-4 b z-50 py-4'>
            GOURMET GIFTING STUDIO
          </h2>
          <div className='flex flex-col md:hidden text-center text-2xl lg:text-5xl text-white px-1 md:px-4 py-4 b'>
            <p className='z-50'>GOURMET GIFTING</p>
            <p className='z-50'>PRE-SETS</p>
          </div>
          <p className='hidden text-center md:flex text-base md:text-xl text-white px-4 b z-50'>
            Gourmet Gift Hampers, are meticulously crafted to indulge the senses, elevate experiences, and create unforgettable moments for your valued recipients.
          </p>
          <p className='md:hidden flex text-white text-center text-base px-1 b z-50'>
            Gourmet Gift Hampers, crafted to delight the senses and create lasting impressions.
          </p>
          <div className='flex flex-col justify-center items-center md:flex-row gap-4 my-4 z-50'>
            <Suspense fallback={<div>Loading...</div>}>
              <NavLink onClick={() => openPDF('./Gifting Gourmet Catalogue N2024-25 by Bonntonn.pdf')}>
                <Button className='bg-white hover:bg-black transition duration-500 cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-lg b'>
                  Gifting Pre-Sets
                </Button>
              </NavLink>
            </Suspense>
          </div>
        </div>
      </motion.div>

      {/* Birth Announcements Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className={sectionClass}
        style={{backgroundImage: `url('./diwaliActual.webp')`}}
      >
        <div className={overlayClass}>
          <h2 className='headings text-center text-2xl lg:text-5xl text-white px-1 md:px-4 b py-4 z-50'>
            BIRTH ANNOUNCEMENTS
          </h2>
          <p className='hidden text-center md:flex text-sm md:text-xl text-white px-4 b z-50'>
            Elegant birth announcements, exquisitely designed to celebrate new beginnings, share your joy, and create cherished memories with family and friends.
          </p>
          <p className='md:hidden flex text-white text-center text-base px-1 b z-50'>
            Elegant birth announcements are designed to celebrate new beginnings and share your joy with loved ones.
          </p>
          <div className='my-4 z-50'>
            <Suspense fallback={<div>Loading...</div>}>
              <Button
                onClick={() => openPDF('./Birth Announcement Catalog 24-25 by bonntonn.pdf')}
                className='bg-white hover:bg-black transition duration-500 cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-lg b'
              >
                View Catalogue
              </Button>
            </Suspense>
          </div>
        </div>
      </motion.div>

      {/* Weddings Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className={sectionClass}
        style={{backgroundImage: `url('./wedding.webp')`}}
      >
        <div className={overlayClass}>
          <h2 className='headings text-center text-2xl lg:text-5xl text-white px-1 md:px-4 b py-4 z-50'>
            WEDDINGS
          </h2>
          <p className='hidden text-center md:flex text-sm md:text-xl text-white px-4 b z-50'>
            Opulent wedding announcements, elegantly crafted to showcase your love and leave an unforgettable impression on your guests.
          </p>
          <p className='md:hidden flex text-white text-center text-base px-1 b z-50'>
            Opulent wedding announcements, crafted to showcase your love and leave an unforgettable impression.
          </p>
          <div className='my-4 z-50'>
            <Suspense fallback={<div>Loading...</div>}>
              <Button
                onClick={() => openPDF('./Wedding Cakes Lookbook 24-25 by Bonntonn.pdf')}
                className='bg-white hover:bg-black transition duration-500 cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-lg b'
              >
                View Catalogue
              </Button>
            </Suspense>
          </div>
        </div>
      </motion.div>

      {/* Diwali Edit Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className={sectionClass}
        style={{backgroundImage: `url('./diwali.webp')`}}
      >
        <div className={overlayClass}>
          <h2 className='headings text-center text-2xl lg:text-5xl font-medium text-white px-1 md:px-4 b z-50 py-4'>
            DIWALI EDIT
          </h2>
          <p className='hidden text-center md:flex text-base md:text-xl z-50 text-white px-4 b'>
            Exquisite Diwali gift boxes, curated to celebrate success, foster connections, and leave a lasting impression on your corporate partners.
          </p>
          <p className='md:hidden flex text-white text-center text-base px-1 b z-50'>
            Exquisite Diwali gift boxes to celebrate success and impress corporate partners.
          </p>
          <div className='flex flex-col justify-center items-center md:flex-row gap-4 my-4 z-50'>
            <Suspense fallback={<div>Loading...</div>}>
              <Button
                onClick={() => openPDF('./Main Festive Diwali 2024.pdf')}
                className='bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-base b'
              >
                Diwali Pre-Sets
              </Button>
              <Button
                onClick={() => openPDF('./Corporate Catalogue 2024.pdf')}
                className='bg-white hover:bg-black transition duration-500 w-[200px] cursor-pointer text-black hover:text-white font-semibold mx-1 md:mx-4 px-6 py-4 rounded-xl text-base b'
              >
                Corporate Gifting
              </Button>
            </Suspense>
          </div>
        </div>
      </motion.div>

      {/* Popup Modal */}
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-2'
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className='relative md:w-[700px] h-[300px] md:h-[500px]'
          >
            <img
              className='w-full h-full object-cover rounded-lg'
              src={choice === 0 ? './birthPopup.webp' : './weddingPopup.webp'}
              alt={choice === 0 ? "Birth Announcement Coming Soon" : "Wedding Announcement Coming Soon"}
            />
            <button
              onClick={handlePopupClose}
              className='absolute top-2 right-2 bg-white py-1 px-2 font-bold text-sm rounded-full shadow-lg hover:bg-gray-200 transition-colors'
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Make It Your Own Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className='w-full flex flex-col gap-4 b my-20 px-2'
      >
        <h1 className='text-2xl md:text-[40px] text-center font-semibold b'>
          Make It Your Own
        </h1>
        <div className='flex justify-evenly gap-8 flex-wrap my-8'>
          {boxes.map(item => (
            <motion.div
              key={item.desc}
              whileHover={{ scale: 1.05 }}
              className='flex flex-col items-center gap-4 b'
            >
              <img
                className='rounded-full size-[80px] md:size-[200px]'
                src={item.pic}
                alt={item.desc}
                loading="lazy"
              />
              <div className='flex flex-col items-center gap-2'>
                <p className='text-lg md:text-xl headings font-semibold b'>{item.desc}</p>
                <p className='text-sm md:text-lg para text-slate-500 times'>{item.moq}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Connect With Us Section */}
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className='w-full flex flex-col items-center gap-10 md:my-20 mx-auto'
      >
        <h1 className='text-2xl md:text-[40px] text-center font-semibold b'>
          Connect With Us
        </h1>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </motion.div>

      {/* WhatsApp Component */}
      <Suspense fallback={null}>
        <Whatsapp occasion={'Bulk Ordering'} />
      </Suspense>
    </motion.div>
  );
}

// Performance optimization: Memoize the component to prevent unnecessary re-renders
export default React.memo(Home);
