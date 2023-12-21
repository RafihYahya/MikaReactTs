import CreatePostComp from '../Components/CreatePostComp';
import MiniProfileUserCardComp from '../Components/MiniProfileUserCardComp';
import Navbar from '../Components/Navbar';
import TabsComp from '../Components/TabsComp';

//type Props = {a:number};

const HomePage = (): JSX.Element => {

  return (

    <>
      <Navbar />
      <div className='fixed overflow-hidden w-full h-full grid grid-cols-11  p-2  gap-2 lg:pt-24 md:pt-20 '>
        <div id='sideLines' className='  col-span-2 h-[90.5%]  bg-[#ede8e80a] backdrop-blur-md rounded-sm text-center '></div>
        <div id='mainCenter' className=' flex flex-col col-span-7 gap-4  h-full '>
          <div className=' h-[10vh] bg-[#EDE8E805] backdrop-blur-sm rounded-md flex items-center justify-center '>
            <TabsComp />
            </div>
          <div className=' h-screen bg-[#EDE8E805] backdrop-blur-md rounded-md text-center overflow-auto  '>
            <CreatePostComp />
          </div>
        </div>
        <div id='sideLines' className='col-span-2 h-[90.5%]  bg-[#ede8e80b] backdrop-blur-md rounded-md text-center'>
          <MiniProfileUserCardComp/>
          <MiniProfileUserCardComp/>
          <MiniProfileUserCardComp/>
        </div>
      </div>
    </>
  )
}
export default HomePage;