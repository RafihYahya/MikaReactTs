import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const AuthLayout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default AuthLayout