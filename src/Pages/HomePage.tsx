import React from 'react'
import Navbar from '../Components/Navbar';

//type Props = {a:number};

const HomePage = ():JSX.Element =>  {
 
  return (
   
    <>
    <Navbar/>
    <div className='w-full h-full grid grid-cols-8 m-4 gap-4'>
        <div className='col-span-2 h-40 bg-[#EDE8E825] backdrop-blur-sm '>Miaw</div>
        <div className='col-span-2 h-40 bg-[#EDE8E815] backdrop-blur-md '>Miaw</div>
        <div className='col-span-2 h-40 bg-[#EDE8E825] backdrop-blur-md  '>Miaw</div>
    </div>
    </>
  )
}
export default HomePage;