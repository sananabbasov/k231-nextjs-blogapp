import React from 'react'

import '@/app/globals.css'
import Card from './Card'
import Banner from './Banner'

function index() {
    return (
        <div>
            <Banner />
            <div className='w-[90%] m-auto gap-5 flex justify-between flex-wrap'>
                {Array.from({ length: 9 }, (_, index) => (
                    <Card key={index} />
                ))}

            </div>
        </div>

    )
}

export default index