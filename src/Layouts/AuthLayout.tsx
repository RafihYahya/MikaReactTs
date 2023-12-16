import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ErrorPage from '../Pages/ErrorPage'

const AuthLayout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default AuthLayout