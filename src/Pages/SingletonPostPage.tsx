import Navbar from '../Components/Navbar'
import PostCompPage from '../Components/PostCompPage'

const SingletonPostPage = () => {
  return (
    <>
    <Navbar />
    <div className=' pt-24 fixed overflow-hidden w-full h-full md:grid md:grid-cols-12  p-2  gap-2 lg:pt-24 md:pt-20 '>
      <div id='sideLines' className='py-4 px-2 md:block hidden  md:col-span-1 lg:col-span-3  h-[95%] bg-transparent lg:bg-[#ede8e805] backdrop-blur-md rounded-sm text-center '>
        
      </div>
      <div id='mainCenter' className=' flex flex-col md:col-span-9 lg:col-span-6 gap-4  h-full '>
        <div id="scrollable" className=' h-screen bg-[#EDE8E805] backdrop-blur-md rounded-md text-center overflow-auto  '>
        <h1 id="spliter" className=''></h1>

        <PostCompPage/>

        </div>
      </div>
      <div id='sideLines' className='hidden md:block md:invisible lg:visible md:col-span-1 lg:col-span-3 h-[95%] bg-transparent lg:bg-[#ede8e805] backdrop-blur-md rounded-md text-center'>
       
       
      </div>
    </div>
  </>
  )
}

export default SingletonPostPage