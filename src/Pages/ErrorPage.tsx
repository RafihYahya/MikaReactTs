import { Link } from 'react-router-dom'

const ErrorPage = (): JSX.Element => {
 // <img id="test01" width="450px" height="450px" src="src/assets/test01.png" alt="" />
  return (
    <div className="pt-[20vh] 2xl:pt-0 w-full h-[90vh]  flex  items-center justify-center ">
      <div className=' h-full flex flex-col items-center justify-center'>
        <h1 className='text-[132px]'>4<span className='text-pink-600'>0</span>4</h1>
        <h1 className='text-5xl'>Page Not <span className='text-pink-600'>F</span>ound</h1>
        <Link to="/" className=' text-lg pt-4'>Back To <span className='text-pink-500 hover:text-pink-600 underline'>Home</span></Link>
      </div>
    </div>
  )
}

export default ErrorPage