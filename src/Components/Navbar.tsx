import { Article, Bell, Chats, HouseSimple, MagnifyingGlass, SignIn, User } from "@phosphor-icons/react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useStateContext } from "../Context/ContextProvider"
import axios from "axios"
import { ApiInfo } from "../ConstantsGlobal"
import { ToggleMobileNavbarAtom2 } from "../Context/Atoms"
import { useAtom } from "jotai"
//import { useStateContext } from "../Context/ContextProvider"

const Navbar = ({ togglerset, togglerset2 }: { togglerset: any, togglerset2: any }) => {

  const [notifclicked, setnotifclicked] = useState(false)
  const [searchclicked, setsearchclicked] = useState(false)
  const [toggler01, settoggler01] = useState(false)

  const checkifNotifActive = () => {
    setsearchclicked(!searchclicked);
    settoggler01(true);
    if (notifclicked && toggler01) {
      setnotifclicked(false)
    }
  }
  const checkifSearchActive = () => {
    settoggler01(true);
    setnotifclicked(!notifclicked)
    if (toggler01 && searchclicked) {
      setsearchclicked(false)
    }
  }
  const { setIsAuth } = useStateContext();

  const LogOutApi = async () => {
    await axios.post(`${ApiInfo.server}:${ApiInfo.port}/api/logout`).then((response) => {
      console.log(response.data.data);
    }).catch((e) => console.log(e.toJSON()));
  }
  const [Toggler, setToggler] = useAtom(ToggleMobileNavbarAtom2)



  return (

    <div id='navbar' className='  w-full h-full '>

      <div className=' w-full  md:h-16 lg:h-20  fixed z-50 bg-[#EDE8E807] backdrop-blur-sm '>

        <div className=' max-w-[1500px] w-full  mx-auto  h-full flex items-center justify-between scale-90 3xl:scale-100 '>

          <ul className='flex items-center '>
            <h2 id='logo' className='px-4 text-4xl text-pink-500 bg-clip-text scale-110 '>Mika</h2>

          </ul>

          <ul className="flex items-center  ">
            <li title="Home Page" id='home' className='px-12  text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden  '><NavLink id="house" to="/" ><HouseSimple size={32} />

            </NavLink > </li>
            <li title="Chats" id='dashboard ' className='px-12  text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden '><NavLink id="chats" to="/chats"><Chats size={32} />



            </NavLink> </li>
            <li title="Search" id='search' onClick={() => { checkifNotifActive(); togglerset2(searchclicked) }} className={`cursor-pointer px-12 text-md transition-all duration-300 ease-in  hover:scale-110 ${!searchclicked ? "hover:text-pink-600" : "text-pink-600"}  md:block hidden `}><MagnifyingGlass size={32} />



            </li>
            <div className="relative">
              <li title="Notifications" id='Notifications' onClick={() => { checkifSearchActive(); togglerset(notifclicked) }} className={` cursor-pointer relative px-12  text-md transition-all duration-300 ease-in hover:scale-110 ${!notifclicked ? "hover:text-pink-600" : "text-pink-600"}  md:block hidden  `}><Bell size={32} />


              </li>
              {/* bg-[#050505bb] */}
            </div>
            <li title="User Page" id='user' className='px-12 text-md transition-all duration-300 ease-in  hover:scale-110 hover:text-pink-600  md:block hidden '>
              <NavLink to="/user" ><User size={32} />
              </NavLink>
            </li>

          </ul>

          <ul className='flex items-center h-20 md:h-auto'>
            <li id="logout" title="Logout" onClick={() => { setIsAuth(false), localStorage.setItem('Token', 'Empty'),localStorage.setItem('User', 'Empty'),LogOutApi() }} className=' text-md px-4  hover:font-bold  transition-all duration-300 ease-in hover:scale-110   hover:text-pink-600  md:block hidden  '>
              <Link to="/login">
                <SignIn size={32} />

            </Link>
            </li>
            <li id="register" onClick={() => setToggler(!Toggler)} className="text-md px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-110  hover:text-pink-600  md:hidden block"><div><Article size={32} /></div></li>
            <li className="2xl:w-12"></li>
          </ul>


        </div>

      </div>

    </div>

  )
}

export default Navbar