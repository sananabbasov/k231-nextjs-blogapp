import React from 'react'

import '@/app/globals.css'
import Card from './Card'
import Banner from './Banner'

function index() {
    return (
        <div>
            <Banner />
            <div className='w-[90%] m-auto gap-5 flex justify-center md:justify-between flex-wrap ease-in'>
                {Array.from({ length: 9 }, (_, index) => (
                    <Card key={index} />
                ))}
            </div>
            <button className="block hover:bg-blue-300 text-[#696A75] m-auto font-medium border my-10 text-base py-2 px-5 rounded hover:ease-in duration-300">
                Load More
            </button>
            <div className="bg-[#E8E8EA] w-1/2 m-auto rounded-xl text-center p-3 mb-10 text-[#696A75]">
                <p className='text-sm'>Advertisement</p>
                <p className='text-xl font-semibold' >You can place ads</p>
                <p className='text-lg'>750x100</p>
            </div>
        </div>

    )
}

export default index