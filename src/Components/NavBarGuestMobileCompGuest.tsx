import { Article, Chats , SignIn } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"

const NavBarGuestMobileCompGuest = ({ prop }: any) => {
    return (
        <div className={`${prop ? 'hidden' : 'flex'} items-center justify-center backdrop-blur-3xl w-[550px] h-[100vh] top-[20%] left-[9%] rounded-md  border-2 border-pink-600/75 absolute md:hidden  z-[200] `} >
            <ul className=" flex items-center justify-center ">      
                <div className="flex flex-col items-center justify-center gap-20">
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/" >
                            <Chats size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">Chats</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/" >
                            <Article size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">Sign Up</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <li className="hover:text-pink-600 text-pink-600/75 py-4"><NavLink id="house" to="/" >
                            <SignIn size={56} /> </NavLink >
                        </li>
                        <h1 className="text-xl pt-2">Sign In</h1>
                    </div>
                </div>

            </ul>
        </div>
    )
}

export default NavBarGuestMobileCompGuest