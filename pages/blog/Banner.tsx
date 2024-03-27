import React from 'react'
import Image from 'next/image'
import girl from '@/public/girl.jpeg'


const Banner = () => {
    return (
        <div>
            <div className='my-[30px] rounded-lg'>
                <Image className='w-[90%] m-auto h-[450px]' src={girl}
                    alt="Picture of the author" />
            </div>
            <div className="relative">
                <p className='text-[#fff]'>The Impact of Technology on the Workplace: How Technology is Changing</p>
            </div>
        </div>
    )
}

export default Banner