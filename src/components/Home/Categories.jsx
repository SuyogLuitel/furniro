import React from 'react'
import dining from "../../assets/dining.png"
import living from "../../assets/living.png"
import bedroom from "../../assets/bedroom.png"

const category = [
    { name: "Dining", image: dining },
    { name: "Living", image: living },
    { name: "Bedroom", image: bedroom },
]

const Categories = () => {
    return (
        <div className='my-20'>
            <h2 className='text-3xl text-[#333333] font-bold text-center'>Browse The Range</h2>
            <p className='text-sm font-normal text-[#666666] text-center py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex gap-5 justify-center items-center my-5'>
                {category?.map((item, index) => (
                    <div>
                        <img src={item?.image} alt={item?.name} className='rounded-xl' />
                        <p className='text-[#333333] text-xl font-semibold text-center mt-4'>{item?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
