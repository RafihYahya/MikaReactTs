import { useState } from 'react';
import CreatePostComp from '../Components/CreatePostComp';
import MiniProfileUserCardComp from '../Components/MiniProfileUserCardComp';
import Navbar from '../Components/Navbar';
import PostComp from '../Components/PostComp';
import TabsComp from '../Components/TabsComp';
import MainGroupSidelineCardComp from '../Components/MainGroupSidelineCardComp';
import NotificationsCardComp from '../Components/NotificationsCardComp';
import SearchCardComp from '../Components/SearchCardComp';

//type Props = {a:number};

const HomePage = (): JSX.Element => {

  const [ToolbarToggler, setToolbarToggler] = useState('');


  const mainCenterObj = document.getElementById('scrollable');

  const hideToolbarSelection = () => {
    setToolbarToggler('hidden');
  }
  const [NotifToggler, setNotifToggler] = useState('hidden');
  const [SearchToggler, setSearchToggler] = useState('hidden');


  const toggleSearch = (e: boolean) => {
    !e ? setSearchToggler("block") : setSearchToggler("hidden");
    if (NotifToggler == 'block') {
      setNotifToggler('hidden')
    }
  }

  const toggleNotif3 = (e: boolean) => {
    !e ? setNotifToggler("block") : setNotifToggler("hidden");
    if (SearchToggler == 'block') {
      setSearchToggler('hidden')

    }


    if (mainCenterObj) {
      mainCenterObj.addEventListener("scroll", () => {
        hideToolbarSelection();
      })
    }

  }


  return (

    <>
      <Navbar togglerset={toggleNotif3} togglerset2={toggleSearch} />
      <div className=' pt-24 fixed overflow-hidden w-full h-full md:grid md:grid-cols-11  p-2  gap-2 lg:pt-24 md:pt-20 '>
        <div id='sideLines' className='py-4 px-2 md:block hidden  md:col-span-1 lg:col-span-2 h-[100%] 2xl:h-[95%] bg-transparent lg:bg-[#ede8e805] backdrop-blur-md rounded-sm text-center '>
          <MainGroupSidelineCardComp />
          <MainGroupSidelineCardComp />
          <MainGroupSidelineCardComp />
          <MainGroupSidelineCardComp />
        </div>
        <div id='mainCenter' className='relative  flex flex-col md:col-span-9 lg:col-span-7 gap-4  h-full '>
          <SearchCardComp props={SearchToggler} />
          <NotificationsCardComp props={NotifToggler} />
          <div className={` ${ToolbarToggler} h-[10vh] bg-[#EDE8E805] backdrop-blur-sm rounded-md flex items-center justify-center `}>
            <TabsComp />
          </div>
          <div id="scrollable" className=' h-screen bg-[#EDE8E805] backdrop-blur-md rounded-md text-center overflow-auto  '>
            <CreatePostComp />
            <div className='h-[5vh] lg:h-[10vh]'></div>
            <h1 id="spliter" className='text-left ml-2 lg:ml-[5%] text-2xl font-light uppercase  text-pink-600/75 tracking-widest	  w-[90%]'>P<span className='text-pink-600/75 tracking-wider'>osts</span></h1>
            <PostComp />
            <PostComp />
            <PostComp />
            <div className='h-[35vh]'></div>
          </div>
        </div>
        <div id='sideLines' className='hidden md:block md:invisible lg:visible md:col-span-1 lg:col-span-2 h-[100%] 2xl:h-[90.5%] bg-transparent lg:bg-[#ede8e805] backdrop-blur-md rounded-md text-center'>
          <div className='mt-4'>
            <MiniProfileUserCardComp />
          </div>
          <MiniProfileUserCardComp />
          <MiniProfileUserCardComp />
          <MiniProfileUserCardComp />
          <MiniProfileUserCardComp />
          <MiniProfileUserCardComp />
          <MiniProfileUserCardComp />
        </div>
      </div>
    </>
  )
}
export default HomePage;