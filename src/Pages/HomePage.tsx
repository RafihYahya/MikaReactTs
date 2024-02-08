import { useEffect, useState } from 'react';
import CreatePostComp from '../Components/CreatePostComp';
import MiniProfileUserCardComp from '../Components/MiniProfileUserCardComp';
import Navbar from '../Components/Navbar';
import PostComp from '../Components/PostComp';
import TabsComp from '../Components/TabsComp';
import MainGroupSidelineCardComp from '../Components/MainGroupSidelineCardComp';
import NotificationsCardComp from '../Components/NotificationsCardComp';
import SearchCardComp from '../Components/SearchCardComp';
import { useAtom } from 'jotai';
import { ToggleMobileNavbarAtom2 } from '../Context/Atoms';
import NavBarGuestMobileComp from '../Components/NavBarGuestMobileComp';
import axios from 'axios';
import { ApiInfo } from '../ConstantsGlobal';

//type Props = {a:number};

const HomePage = (): JSX.Element => {
  
  const [MainToggle, setMainToggle] = useState(false)
  const [ToggleNavMb, setToggleNavMb] = useAtom(ToggleMobileNavbarAtom2)
  const [ToolbarToggler, setToolbarToggler] = useState('');
  const mainCenterObj = document.getElementById('scrollable');
  const [NotifToggler, setNotifToggler] = useState('hidden');
  const [SearchToggler, setSearchToggler] = useState('hidden');
  const [NumberToggler, setNumberToggler] = useState(0);
  const [PostListings, setPostListings] = useState(
    {
      data: {
        owner: '',
        post: {}
      }
    });

  const getAuthUserPostListingApi = async () => {
    await axios.get(`${ApiInfo.server}:${ApiInfo.port}/api/posts`).
      then(response => {
        setPostListings({
          data: {
            owner: response.data.data.owner,
            post: response.data.data.post
          }
        })
        console.log(response.data.data);
      });
  }




  useEffect(() => {
    //getAuthUserInfoApi();
    getAuthUserPostListingApi();
  }, [NumberToggler,MainToggle]);




  const NumberSetter = (i:number,j:number) => {
    NumberToggler < j ? setNumberToggler(i) : setNumberToggler(0);
  }
  const hideToolbarSelection = () => {
    setToolbarToggler('hidden');
  }
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
  let KeyMapId: any = PostListings.data.post

  return (

    <>
      <Navbar togglerset={toggleNotif3} togglerset2={toggleSearch} />

      <div className={` ${!ToggleNavMb ? 'overflow-hidden' : ''} 
      pt-24 fixed overflow-hidden w-full h-full md:grid md:grid-cols-11  p-2  gap-2 lg:pt-24 md:pt-20 `}>
        <div id='sideLines' className='py-4 px-2 md:block md:invisible lg:visible hidden 
         md:col-span-1 lg:col-span-2 h-[100%] 2xl:h-[95%] bg-transparent lg:bg-[#ede8e805] 
         backdrop-blur-md rounded-sm text-center '>
          <MainGroupSidelineCardComp />
          <MainGroupSidelineCardComp />
          <MainGroupSidelineCardComp />
          <MainGroupSidelineCardComp />
        </div>
        <div id='mainCenter' className='relative  flex flex-col md:col-span-9 lg:col-span-7 gap-4  h-full '>
          <SearchCardComp props={SearchToggler} position={'left-[25%] 2xl:left-[17%] top-[-1%]'} />
          <NotificationsCardComp props={NotifToggler} position={'left-[50%]'} />
          <div className={` ${ToolbarToggler} lg:translate-y-0 md:translate-y-[75%]  
          h-[10vh] bg-[#EDE8E805] backdrop-blur-sm rounded-md flex items-center justify-center `}>
            <TabsComp NumberAdder={NumberSetter} Number={NumberToggler} />
          </div>
          <div id="scrollable" className='lg:translate-y-0 md:translate-y-[10%] h-full sm:h-[125vh] 
          lg:h-[120vh] bg-[#EDE8E805] backdrop-blur-md rounded-md text-center overflow-auto  '>
            <CreatePostComp prop={PostListings.data.owner} settoggle={setMainToggle} toggle={MainToggle}
            />
            <div className='h-[5vh] lg:h-[10vh]'></div>
            <h1 id="spliter" className='text-left ml-2 lg:ml-[5%] text-2xl font-light uppercase 
             text-pink-600/75 tracking-widest	  w-[90%]'>P<span className='text-pink-600/75
              tracking-wider'>osts</span></h1>

            {Object.keys(PostListings.data.post).reverse().map((item) => <PostComp key={KeyMapId[item].id} keyid={KeyMapId[item].id} prop={PostListings} item={item} />)}

            <div className='h-[35vh]'></div>
          </div>
        </div>
        <div id='sideLines' className='hidden md:block md:invisible lg:visible md:col-span-1 
        lg:col-span-2 h-[100%] 2xl:h-[90.5%] bg-transparent lg:bg-[#ede8e805] backdrop-blur-md 
        rounded-md text-center'>
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
        <div onClick={() => { setToggleNavMb(!ToggleNavMb) }} className={`${ToggleNavMb ? 'hidden' : 'block cursor-pointer '}
         overflow-none backdrop-blur-sm w-full h-[200vh] 
          top-[0] bg-black/50 absolute md:hidden block z-[100] `}>
        </div>
        <NavBarGuestMobileComp prop={ToggleNavMb} />
      </div>
    </>
  )
}
export default HomePage;