import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
]

const navIcons = [
    { icon: <LuSearch /> },
    { icon: <AiOutlineShoppingCart />, path: "/cart" },
    { icon: <FiUserPlus />, path: "/login" },
]

const Navbar = () => {
    const [active, setActive] = useState(window.location.pathname)
    const navigate = useNavigate()

    useEffect(() => {
        setActive(window.location.pathname)
    })

    return (
        <div className='sticky top-0 z-50 px-20 py-5 flex justify-between border-b bg-slate-50'>
            <div className='flex gap-1 items-center cursor-pointer'>
                <img src={logo} alt="logo" className='w-8' />
                <p className='text-2xl font-bold'>Furniro</p>
            </div>
            <div className='flex gap-5 items-center'>
                {navLinks.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => navigate(item?.path)}
                        className={`text-base font-normal hover:text-[#B88E2F] hover:font-medium cursor-pointer
                            ${active === item?.path ? "text-[#B88E2F] font-semibold" : ""}
                        `}
                    >
                        {item?.name}
                    </p>
                ))}
            </div>
            <div className='flex gap-5 items-center'>
                {navIcons?.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => navigate(item?.path)}
                        className="text-2xl font-medium hover:text-[#B88E2F] cursor-pointer"
                    >
                        {item.icon}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Navbar
