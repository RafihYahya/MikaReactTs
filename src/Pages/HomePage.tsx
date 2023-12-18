import Navbar from '../Components/Navbar';
import TabsComp from '../Components/TabsComp';

//type Props = {a:number};

const HomePage = (): JSX.Element => {

  return (

    <>
      <Navbar />
      <div className='fixed overflow-hidden w-full h-full grid grid-cols-11  p-2  gap-2 lg:pt-24 md:pt-20 '>
        <div id='sideLines' className='  col-span-2 h-[85vh] bg-[#EDE8E810] backdrop-blur-md rounded-sm text-center'></div>
        <div id='mainCenter' className=' flex flex-col col-span-7 gap-4  h-full '>
          <div className=' h-[13vh] bg-[#EDE8E807] backdrop-blur-sm rounded-md text-center '><TabsComp /></div>
          <div className=' h-[70vh] bg-[#EDE8E807] backdrop-blur-md rounded-md text-center overflow-auto  '>
          </div>
        </div>
        <div id='sideLines' className='col-span-2 h-[85vh] bg-[#EDE8E810] backdrop-blur-md rounded-md text-center'></div>
      </div>
    </>
  )
}
export default HomePage;