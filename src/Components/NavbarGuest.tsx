import { Article, Binoculars, SignIn } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const NavbarGuest = () => {

  

  return (

    <div id='navbar' className='  w-full h-full '>

      <div className=' w-full h-0 md:h-16 lg:h-20  fixed z-50 bg-[#EDE8E807] backdrop-blur-sm '>

        <div className=' max-w-[1500px] w-full  mx-auto  h-full flex items-center justify-between scale-90 3xl:scale-100 '>

          <ul className='flex items-center '>
            <h2 id='logo' className='px-4 text-4xl text-pink-500 bg-clip-text scale-110 '>Mika</h2>

          </ul>

          <ul className="flex items-center  ">
            
            
            
            
            <li id='user' className='px-12 text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden '> <Link to="/extra" ><Binoculars size={32} /></Link> </li>

          </ul>

          <ul className='flex items-center h-20 md:h-auto'>
            <li className=' text-md px-4  hover:font-bold  transition-all duration-300 ease-in hover:scale-110   hover:text-pink-600  md:block hidden  '><Link to="/login"><SignIn size={32} />

            </Link></li>
            <li className=' text-md px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-110  hover:text-pink-600  md:block hidden  '><Link to="/register"><Article size={32} />

            </Link></li>
            
          </ul>


        </div>

      </div>

    </div>

  )
}

export default NavbarGuest