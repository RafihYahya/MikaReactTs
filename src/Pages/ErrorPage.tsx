import {Link} from 'react-router-dom'

const ErrorPage = ():JSX.Element => {
  return (
    <div className="w-full h-[90vh]  flex flex-col items-center justify-center">
        <h1 className="text-7xl text-pink-200 uppercase"><span className='text-pink-700'>404</span> <span className='text-pink-500'>ERROR</span> NOT FOUND</h1>
        <Link to="/" className='underline text-lg pt-4'>Go Back To Your <span className='text-pink-400 text-2xl uppercase '>Country</span></Link>
    </div>
  )
}

export default ErrorPage