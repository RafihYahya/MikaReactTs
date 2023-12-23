import { Article, Bell, Binoculars, HouseSimple, MagnifyingGlass, SignIn, User } from "@phosphor-icons/react"

const Navbar = () => {

  return (

    <div id='navbar' className='  w-full h-full '>

      <div className=' w-full  md:h-16 lg:h-20  fixed z-50 bg-[#EDE8E807] backdrop-blur-sm '>

        <div className=' max-w-[1500px] w-full  mx-auto  h-full flex items-center justify-between scale-90 3xl:scale-100 '>

          <ul className='flex items-center '>
            <h2 id='logo' className='px-4 text-4xl text-pink-500 bg-clip-text scale-110 '>Mika</h2>

          </ul>

          <ul className="flex items-center  ">
            <li id='home' className='px-12  text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden  '><a href="" ><HouseSimple size={32} />

            </a> </li>
            <li id='dashboard ' className='px-12  text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden '><a href=""><Binoculars size={32} />

            </a> </li>
            <li id='dashboard ' className='px-12 text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden '><a href=""><MagnifyingGlass size={32} />



            </a> </li>
            <li id='dashboard ' className='px-12  text-md transition-all duration-300 ease-in hover:scale-110 hover:text-pink-600  md:block hidden  '><a href=""><Bell size={32} />



            </a> </li>
            <li id='dashboard ' className='px-12 text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden '><a href=""><User size={32} />

            </a> </li>
            
          </ul>

          <ul className='flex items-center h-20 md:h-auto'>
            <li className=' text-md px-4  hover:font-bold  transition-all duration-300 ease-in hover:scale-110   hover:text-pink-600  md:block hidden  '><a href=""><SignIn size={32} />

            </a></li>
            <li className=' text-md px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-110  hover:text-pink-600  md:block hidden  '><a href=""><Article size={32} />

            </a></li>
            <li className=' text-md px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-110  hover:text-pink-600  block md:hidden  '><a href=""><Article size={32} />

            </a></li>
          </ul>


        </div>

      </div>

    </div>

  )
}

export default Navbar