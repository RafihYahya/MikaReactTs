import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage'

const GuestLayout = () => {
  return (

    <>
        <Routes>
          
          <Route path='*' element={<ErrorPage/>}/>

        </Routes>

    </>

  )
}

export default GuestLayout