import Image from 'next/image'
import React from 'react'
import test from '@/public/testBilal.jpg'
import OffersCard from '@/components/offerscard'
import RecurRoutesCard from '@/components/recurroutescard'


const Profile = ({profilename = 'Bilal Test', profilepic='/@/public/vercel.svg'}) => {
    return(
        <div className='flex'>
            <div className='bg-gradient-to-r from-red-100 to-yellow-100 px-40 min-h-screen items-center'>

                    <div className='justify-center flex'>

                        <div className='relative p-20'>
                            
                            <Image alt='Image' src={test} layout='fill' className="rounded-full object-cover border-white border-[10px]" />
                        </div>

                    </div>

                    <div className='text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>
                        Welcome, {profilename}
                    </div>

                    <OffersCard />

                    <RecurRoutesCard />

            </div>
        </div>
    )
}

export default Profile

