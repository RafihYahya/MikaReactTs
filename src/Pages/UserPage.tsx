import { CaretLeft, CaretRight, ChartLine, Gear } from '@phosphor-icons/react'
import Navbar from '../Components/Navbar'
import PostListingComp from '../Components/PostListingComp'
import { useState } from 'react';
import SearchCardComp from '../Components/SearchCardComp';
import NotificationsCardComp from '../Components/NotificationsCardComp';

const UserPage = () => {

  const [NotifToggler, setNotifToggler] = useState('hidden');
  const [SearchToggler, setSearchToggler] = useState('hidden');

  
  const toggleSearch = (e:boolean) => {
    !e? setSearchToggler("block") : setSearchToggler("hidden");
    if(NotifToggler == 'block'){
      setNotifToggler('hidden')
    }
  }

  const toggleNotif3 = (e:boolean) => {
    !e? setNotifToggler("block") : setNotifToggler("hidden");
    if(SearchToggler == 'block'){
      setSearchToggler('hidden')

    }
  }
  return (
    <>
      <Navbar  togglerset={toggleNotif3} togglerset2={toggleSearch}  />
      <div className='relative pt-[20%] lg:pt-[6%] p-10 flex items-center justify-between gap-[30vh] lg:gap-8 w-full h-[135vh] lg:h-[125vh] max-w-[1650px] mx-auto lg:flex-row flex-col'>
      <NotificationsCardComp  props={NotifToggler} position={'left-[50%] top-[7%]'}/>
      <SearchCardComp props={SearchToggler} position={'left-[32%] 2xl:left-[25%] top-[7%]'}/>
        <div className=' w-full h-full flex justify-start items-center flex-col gap-10 pt-10 lg:mr-[4%] lg:ml-[-4%]'>
          <div className='  flex justify-center items-center gap-4'>
            <div className='flex justify-center items-center flex-col gap-2 '>
              <div className='w-14 h-14 bg-[#EDE8E820] backdrop-blur-sm border-2 border-pink-600/20 rounded-full mb-2'></div>
              <div className='w-14 h-14 bg-[#EDE8E820] backdrop-blur-sm border-2 border-pink-600/20 rounded-full mb-2'></div>
              <div className='w-14 h-14 bg-[#EDE8E820] backdrop-blur-sm border-2 border-pink-600/20 rounded-full mb-2'></div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <div className='w-72 h-72 bg-[#EDE8E810] backdrop-blur-sm border-2 border-pink-600/75 rounded-full mb-2'></div>
              <h2 className='text-lg'>Miaw Profile</h2>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 '>
              <div className='w-14 h-14 bg-[#EDE8E820] backdrop-blur-sm border-2 border-pink-600/20 rounded-full mb-2'></div>
              <div className='w-14 h-14 bg-[#EDE8E820] backdrop-blur-sm border-2 border-pink-600/20 rounded-full mb-2'></div>
              <div className='w-14 h-14 bg-[#EDE8E820] backdrop-blur-sm border-2 border-pink-600/20 rounded-full mb-2'></div>
            </div>
          </div>
          <div className='w-[85%] h-[18%] bg-[#EDE8E810] backdrop-blur-sm  rounded-sm border-pink-600/75 border-t-2 '>
            <p className='m-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et tempore asperiores. Iste eos tempora praesentium, maxime, doloribus maiores possimus ratione, quidem minima impedit soluta odit aliquam deserunt! Exercitationem, voluptates.</p>
          </div>
          <div className='flex items-center justify-between px-16 w-full h-20 gap-2 mt-4'>
            <div className=' gap-2 flex items-center justify-center w-[25%] h-[80%] bg-[#EDE8E810] backdrop-blur-sm border-2 border-pink-600/75 rounded-md '>
              <Gear size={32} />
              <h3 className='text-md uppercase'>Settings</h3>
            </div>
            <div className=' gap-2 flex items-center justify-center w-[25%] h-[80%] bg-[#EDE8E810] backdrop-blur-sm border-2 border-pink-600/75 rounded-md '>
              <ChartLine size={32} />
              <h3 className='text-md uppercase'>Analytics</h3>
            </div>
          </div>
        </div>
        <div className='  w-full h-full flex justify-center items-center flex-col '>
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