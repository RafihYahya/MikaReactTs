import LoginComp from '../Components/LoginComp'
import NavbarGuest from '../Components/NavbarGuest'

const LoginPage = () => {
  return (
    <>
    <NavbarGuest />
    <div className='md:h-[20vh] lg:h-[15vh] 2xl:h-[5vh]'></div>
    <LoginComp/>
    </>
  )
}

export default LoginPage