import { Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'

const GuestLayout = () => {
  return (

    <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

    </>

  )
}

export default GuestLayout