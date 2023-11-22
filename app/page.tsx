import Image from 'next/image'
import Smeb from '@/assets/images/smeb.jpeg'

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-xxl font-bold'>Welcome To</h1>
    <div className="img-align">
      <Image src={Smeb} width={150} height={150} alt="smeb" />
    </div>
    <h1 className='text-xxl font-bold'>সোসাইটি অব মেরিন ইন্জিনিয়ার্স, বাংলাদেশ।</h1>
    <h1 className='text-xxl font-bold'>Society of <span className='text-sky-500'>Marine Engineers</span>, Bangladesh</h1>
    <p>This website is under construction.</p>
    <p>Please feel free to send your queries or suggestion by</p>
    <p>WhatsApp message to +880 1710202031</p>
    <p>Thank you for your patience.</p>
    </main>
  )
}
