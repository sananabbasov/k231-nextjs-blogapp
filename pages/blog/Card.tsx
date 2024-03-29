import React from 'react'
import Image from 'next/image'
import img from '@/public/1..jpeg'
import user from '@/public/user.jpeg'

const Card = () => {
    return (
        <div className='w-[90%] md:w-[45%] lg:w-[30%] ease-in'>
            <div className="w-full items-center shadow p-3 rounded-lg">
                <div>
                    <Image className='w-full' src={img} height={240}
                        alt="Picture of the author" />
                </div>
                <div><a className='text-blue-300' href="#">Tecnoloji</a></div>
                <p className='text-xl my-4 text-[#181A2A] font-semibold'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                <div className='flex justify-between'>
                    <Image className='rounded-full' src={user} alt="user" width={30} height={30} />
                    <p className='text-lg text-[#97989F]'>Tracey Wilson</p>
                    <p className='text-lg text-[#97989F]'>August 20, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Card