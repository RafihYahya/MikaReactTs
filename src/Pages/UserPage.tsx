import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Navbar from '../Components/Navbar'

const UserPage = () => {
  return (
    <>
      <Navbar />
      <div className='pt-[6%] p-10 flex items-center justify-center gap-4 w-full h-screen max-w-[1550px] mx-auto'>
        <div className=' w-full h-full flex justify-start items-center flex-col gap-8 p-10'>
          <div className='w-72 h-72 bg-[#EDE8E815] backdrop-blur-md border-2 border-pink-600/75 rounded-full mb-2 '></div>
          <div className='w-[70%] h-[24%] bg-[#EDE8E815] backdrop-blur-md  rounded-lg'></div>
          <div className='w-[35%] h-[10%] bg-[#EDE8E815] backdrop-blur-md border-2 border-pink-600/75 rounded-lg mt-12'></div>
        </div>
        <div className='  w-full h-full flex justify-center items-center flex-col'>
          <div className='w-full h-24 flex justify-between items-center mb-2'>
            <div className='hover:text-pink-600 cursor-pointer'><CaretLeft size={36} />
            </div>
            <div className='h-14 rounded-md w-36 bg-[#EDE8E810] backdrop-blur-md border-t-2 border-pink-600/75'></div>
            <div className='h-14 rounded-md w-36 bg-[#EDE8E810] backdrop-blur-md'></div>
            <div className='h-14 rounded-md w-36 bg-[#EDE8E810] backdrop-blur-md'></div>
            <div className='hover:text-pink-600 cursor-pointer'><CaretRight size={36} />

            </div>
          </div>
          <div className='w-full h-full bg-[#EDE8E807] backdrop-blur-md rounded-md'></div>
        </div>
      </div>
    </>
  )
}

export default UserPage