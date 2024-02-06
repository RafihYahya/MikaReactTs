import {  useAtom } from 'jotai'
import LoginComp from '../Components/LoginComp'
import NavbarGuest from '../Components/NavbarGuest'
import { ToggleMobileNavbarAtom } from '../Context/Atoms'
import NavBarGuestMobileCompGuest from '../Components/NavBarGuestMobileCompGuest'

const LoginPage = () => {
  const [ToggleNavMb,setToggleNavMb] = useAtom(ToggleMobileNavbarAtom)


  return (
    <div className='w-full h-full'>
        <NavbarGuest />
        <div className='md:h-[20vh] lg:h-[15vh] 2xl:h-[5vh]'></div>
        <div onClick={() => {setToggleNavMb(!ToggleNavMb)}} className={`${ToggleNavMb ? 'hidden':'block cursor-pointer '} overflow-none backdrop-blur-sm w-full h-[150vh] top-[0] bg-black/50 absolute md:hidden block z-[100] `}>
        </div>
        <NavBarGuestMobileCompGuest prop={ToggleNavMb}/>
        <LoginComp />
    </div>
  )
}

export default LoginPage