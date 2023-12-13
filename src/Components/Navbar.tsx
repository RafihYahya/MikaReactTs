

const Navbar = () => {

 

  return (
  
      <div id='navbar' className='hidden md:block w-full h-full '>

            <div className='w-full md:h-16 lg:h-20 backdrop-blur-sm shadow-md '>
    
              <div className=' max-w-[1500px] w-full  mx-auto  h-full flex items-center justify-between scale-90 3xl:scale-100 '>
        
            <ul className='flex items-center '>
                <h2 id='logo' className='px-4 text-4xl text-violet-400 bg-clip-text '>Mika</h2>
                <li id='home' className='px-4  text-md transition-all duration-300 ease-in    '><a href="" >Home</a> </li>
                <li id='dashboard 'className='px-4  text-md transition-all duration-300 ease-in   '><a href="">Dashboard</a> </li>
            </ul>
        
        
            <ul className='flex items-center '>
                <li className=' text-md px-4  hover:font-bold  transition-all duration-300 ease-in hover:scale-105   hover:text-palete-100  '><a href="">Login</a></li>
                <li className=' text-md px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-105  hover:text-palete-100  '><a href="">Register</a></li>
            </ul>
        
        
    </div>

</div>

</div>

  )
}

export default Navbar