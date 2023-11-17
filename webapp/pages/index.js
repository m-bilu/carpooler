import Image from 'next/image'
import { Inter } from 'next/font/google'
import Profile from '@/components/profile.js'
import MainMap from '@/components/map.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex'>

      <Profile />
      <MainMap />

    </main>
  )
}
