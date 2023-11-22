import Link from 'next/link'
import ErrorImage from '@/assets/images/404.png'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center my-4'>
      <Image src={ErrorImage} width={300} height={300} alt="Page Not Found" />
      <p>Could not find requested resource</p>
      <Link className='text-blue-400 hover:underline' href="/">Return Home</Link>
    </div>
  )
}