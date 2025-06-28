import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <h3 className="text-black text-3xl tracking-tight font-pacifico w-36 h-auto max-md:flex-1">
  <span className="text-blue-500">P</span>ict
  <span className="text-black">ora</span>
</h3>

      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Karthiga | All right reserved.</p>
      
      <div className='flex gap-2.5 '>
        <img src={assets.facebook_icon} alt="" width={35}/>
        <a
        href="https://x.com/karthiga1404?t=dfaYL6-LnLg0r-UkQ68IHw&s=09"
        target="_blank"
        rel="noopener noreferrer">
        <img src={assets.twitter_icon} alt="Visit my profile" width={35} />
        </a>

        <a
        href="https://www.instagram.com/karthiga_1404_?igsh=NTd2NGRsMDV1MjZy"
        target="_blank"
        rel="noopener noreferrer">
        <img src={assets.instagram_icon} alt="Visit my profile" width={35} />
        </a>
        
      </div>
    </div>
  )
}

export default Footer
