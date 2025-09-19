import React from 'react'

import BannerImg from '../assets/banner1.png'  // <-- import banner image
import Number from '../components/Number';
import Form from '../components/Form';

const Contact= () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#aaffa9] via-[#11ffbd] to-[#07f9b6] min-h-160px p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      {/* Banner Image */}
      <img 
        src={BannerImg} 
        alt="Banner"
        className="w-64 h-64 object-contain mb-6"  // adjust size as needed
      />

      {/* Experience Section */}
     
    </div>
     
     <Number/>
     <Form/>
     </>
  )
}

export default Contact;