import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Navbar from '../Components/Navbar'
import PostListingComp from '../Components/PostListingComp'

const UserPage = () => {
  return (
    <>
      <Navbar />
      <div className='pt-[6%] p-10 flex items-center justify-center gap-4 w-full h-[115vh] max-w-[1550px] mx-auto'>
        <div className=' w-full h-full flex justify-start items-center flex-col gap-8 p-10'>
          <div className='w-72 h-72 bg-[#EDE8E815] backdrop-blur-md border-2 border-pink-600/75 rounded-full mb-2 '></div>
          <div className='w-[70%] h-[18%] bg-[#EDE8E815] backdrop-blur-md  rounded-lg'></div>
          <div className='w-[35%] h-[8%] bg-[#EDE8E815] backdrop-blur-md border-2 border-pink-600/75 rounded-lg mt-12'></div>
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
          <div className='w-full h-full bg-[#EDE8E807] backdrop-blur-md rounded-md p-8 overflow-auto border-b-2 border-pink-600/75'>
            <button type="button" className='py-4 px-8 rounded-md border-2 border-pink-600/50 hover:bg-pink-600/30 transition-colors duration-200 ease-in uppercase  hover:border-pink-600/75 mb-8 backdrop-blur-md'>Show All</button>
            <PostListingComp />
            <PostListingComp />
            <PostListingComp />
            <PostListingComp />
            <PostListingComp />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPage