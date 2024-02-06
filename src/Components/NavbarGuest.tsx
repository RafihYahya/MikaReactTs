import { Article, Chats, SignIn } from "@phosphor-icons/react"
import {  NavLink } from "react-router-dom"
import { ToggleMobileNavbarAtom } from "../Context/Atoms"
import { useAtom } from "jotai"
const NavbarGuest = () => {

  const [Toggler, setToggler] = useAtom(ToggleMobileNavbarAtom)
  

  return (

    <div id='navbar' className='  w-full h-full relative sm:translate-y-0 translate-y-[-40px]'>

      <div  className=' w-full h-24  md:h-16 lg:h-20  fixed z-50 bg-[#EDE8E807] backdrop-blur-sm '>

        <div className=' max-w-[1500px] w-full  mx-auto  h-full flex items-center justify-between scale-90 3xl:scale-100 '>

          <ul className='flex items-center '>
            <h2 id='logo' className='px-4 text-4xl text-pink-500 bg-clip-text scale-110 '>Mika</h2>

          </ul>

          <ul className="flex items-center  ">
            
            
            
            
            <li id='user' className='px-12 text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden '> <NavLink to="/chats" ><Chats size={32} />

</NavLink> </li>

          </ul>

          <ul className='flex items-center h-20 md:h-auto'>
            <li className=' text-md px-4  hover:font-bold  transition-all duration-300 ease-in hover:scale-110   hover:text-pink-600  md:block hidden  '><NavLink to="/login"><SignIn size={32} />

            </NavLink></li>
            <li className=' text-md px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-110  hover:text-pink-600  md:block hidden  '><NavLink to="/register"><Article size={32} />

            </NavLink></li>
            <li onClick={() => setToggler(!Toggler)} className="text-md px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-110  hover:text-pink-600  md:hidden block"><div><Article size={32} /></div></li>
          </ul>


        </div>

      </div>

    </div>

  )
}

export default NavbarGuest