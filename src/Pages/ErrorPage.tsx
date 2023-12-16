import {Link} from 'react-router-dom'

const ErrorPage = ():JSX.Element => {
  return (
    <div className="w-full h-[90vh]  flex flex-col items-center justify-center">
        <h1 className="text-7xl text-violet-500 uppercase">Error</h1>
        <Link to="/" className='underline text-lg'>Go Back To <span className='text-violet-400'>Home</span></Link>
    </div>
  )
}

export default ErrorPage