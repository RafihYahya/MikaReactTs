import { Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import ErrorPage from '../Pages/ErrorPage'

const GuestLayout = () => {
  return (

    <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage/>}/>

        </Routes>

    </>

  )
}

export default GuestLayout