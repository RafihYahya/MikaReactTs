import {Link} from 'react-router-dom'

const ErrorPage = ():JSX.Element => {
  return (
    <div className="w-full h-[90vh]  flex flex-col items-center justify-center">
        <h1 className='text-[132px]'>4<span className='text-pink-600'>0</span>4</h1>
        <h1 className='text-5xl'>Page Not <span className='text-pink-600'>F</span>ound</h1>
        <Link to="/" className=' text-lg pt-4'>Back To <span className='text-pink-500 hover:text-pink-600 underline'>Home</span></Link>
    </div>
  )
}

export default ErrorPage