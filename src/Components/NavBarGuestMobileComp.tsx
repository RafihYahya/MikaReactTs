import { Bell, Chats, HouseSimple, MagnifyingGlass, SignIn, User } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"

const NavBarGuestMobileComp = ({ prop }: any) => {
    return (
        <div className={`${prop ? 'hidden' : 'flex'} items-center justify-center backdrop-blur-lg w-[550px] h-[100vh] top-[20%] left-[9%] rounded-md  border-2 border-pink-600/75 absolute md:hidden  z-[102] `} >
            <ul className=" flex items-center justify-center gap-24">
                <div className="flex flex-col items-center justify-center gap-20">
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/" >
                            <HouseSimple size={56} /> </NavLink >
                        </li>
                        <li className="text-xl font-bold pt-2"><NavLink to="/">Home</NavLink></li>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/" >
                            <Chats size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">Chats</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/" >
                            <MagnifyingGlass size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">Search</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-20">
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/" >
                            <Bell size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">Notifications</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/user" >
                            <User size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">User Profile</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/login" >
                            <SignIn size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">Logging Out</h1>
                    </div>
                </div>

            </ul>
        </div>
    )
}

export default NavBarGuestMobileComp