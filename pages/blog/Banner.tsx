import React from 'react'
import Image from 'next/image'
import girl from '@/public/girl.jpeg'
import Link from 'next/link'
import user from '@/public/user.jpeg'



const Banner = () => {
    return (
        <div >
            <div className="text-center ">
                <h2 className='font-samibold text-[#000] mt-8 mb-2 text-4xl'>Page Title</h2>
                <Link className='text-base m-3 text-[#3B3C4A] hover:text-blue-300' href={"/"}>Home</Link>
                <Link className='text-base m-3 text-[#3B3C4A] hover:text-blue-300' href={"/"}>Link Ona</Link>
            </div>

            <div>
                <div className='my-[30px] rounded-lg relative'>
                    <Image className='w-[90%] m-auto h-[450px]' src={girl}
                        alt="Girl" />

                    <div className="absolute bottom-10 left-[10%] ">
                        <div><a className='text-white py-1 px-3 bg-blue-600 rounded-lg' href="#">Tecnoloji</a></div>
                        <p className=' md:text-4xl text-xl text-white my-4 mdleading-6 leading-none font-semibold '>The Impact of Technology on the </p>
                        <p className='md:text-4xl text-xl text-white my-4 md:leading-6 leading-none font-semibold'>Workplace: How Technology is Changing</p>
                        <div className='flex gap-5'>
                            <Image className='rounded-full' src={user} alt="user" width={30} height={30} />
                            <p className='text-lg text-white'>Tracey Wilson</p>
                            <p className='text-lg text-white'>August 20, 2022</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Banner