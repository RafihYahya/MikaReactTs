import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ErrorPage from '../Pages/ErrorPage'
import UserPage from '../Pages/UserPage'

const AuthLayout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default AuthLayout