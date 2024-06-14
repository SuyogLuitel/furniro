import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div className='px-20 py-10 bg-slate-50'>
            <div className='flex justify-between'>
                <div>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <img src={logo} alt="logo" className='w-8' />
                        <p className='text-2xl font-bold'>Furniro</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-gray-500 text-md font-medium'>Links</p>
                    <div className='flex flex-col gap-5'>
                        <p className='text-sm font-medium cursor-pointer'>Home</p>
                        <p className='text-sm font-medium cursor-pointer'>Shop</p>
                        <p className='text-sm font-medium cursor-pointer'>About</p>
                        <p className='text-sm font-medium cursor-pointer'>Contact</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-gray-500 text-md font-medium'>Help</p>
                    <div className='flex flex-col gap-5'>
                        <p className='text-sm font-medium cursor-pointer'>Payment Options</p>
                        <p className='text-sm font-medium cursor-pointer'>Returns</p>
                        <p className='text-sm font-medium cursor-pointer'>Privacy Policies</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-gray-500 text-md font-medium'>Newsletter</p>
                    <div className='flex items-center'>
                        <input type="text" placeholder='Enter your email address' className='text-sm font-normal pl-4 pr-8 py-3 rounded-tl-md rounded-bl-md outline-none tracking-wide' />
                        <button className='bg-[#B88E2F] text-white text-sm font-medium px-6 py-3 rounded-tr-md rounded-br-md'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <hr className='my-5' />
            <p className='text-xs font-medium '>2024 Furino. All rights reverved</p>
        </div>
    )
}

export default Footer
