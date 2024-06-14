import React from 'react'
import headerImg from "../../assets/headerImg.png"

const Header = () => {
    return (
        <div className='relative w-full h-[90vh]'>
            <img src={headerImg} alt="headerImg" className='w-full h-full' />
            <div className='bg-[#FFF3E3] px-5 py-8 absolute bottom-20 right-20 w-[450px] rounded-lg'>
                <p className='text-[#333333] text-xs tracking-widest font-semibold'>New Arrival</p>
                <h2 className='text-[#B88E2F] text-4xl font-bold my-2'>Discover Our <br /> New Collection</h2>
                <p className='text-[#333333] text-sm font-medium mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className='bg-[#B88E2F] text-white px-8 py-3 text-xs font-medium tracking-wider'>BUY NOW</button>
            </div>
        </div>
    )
}

export default Header
