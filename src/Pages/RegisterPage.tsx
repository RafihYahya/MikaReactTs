import NavbarGuest from "../Components/NavbarGuest"
import RegisterComp from "../Components/RegisterComp"

const RegisterPage = () => {
  return (
    <>
    <NavbarGuest />
    <div className='md:h-[20vh] lg:h-[20vh] 2xl:h-[10vh]'></div>
    <RegisterComp/>
    </>
  )
}

export default RegisterPage