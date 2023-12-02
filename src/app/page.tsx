import Image from 'next/image'
import facebook from "../../public/facebook.svg"
import Link from 'next/link'

export default function Home() {
  return (
       <div className='h-screen bg-gray-100 flex justify-center items-center'>
        <div className='w-1/2 px-10 -mt-20 mr-14'>
          <Image className='w-96' src={facebook} alt='facebook logo'/>
           <p className='text-3xl ml-8 -mt-3'>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className='bg-white flex flex-col justify-start py-7 w-1/4 h-96 rounded-xl gap-y-4 '>
          <input className='border border-gray-300 p-3 rounded-lg mx-4 focus:outline-blue-600  ' type="text" placeholder='Email address or phone number' />
          <input className='border border-gray-300 p-3 rounded-lg mx-4 focus:outline-blue-600 ' type="Password" placeholder='Password' />
          <button className='text-white font-extrabold text-lg p-3 mx-4 rounded-lg bg-blue-500 py-3 hover:bg-blue-600 '>Log in </button>
          <Link className='text-sm text-blue-500  flex justify-center  hover:underline' href="/">forgotten password?</Link>
          <span>
            <hr />
          </span>
          <button className='font-extrabold text-white bg-green-600 py-4 mx-16 rounded-lg hover:bg-green-700'>Create new account</button>
        </div>
       </div>
      )
}