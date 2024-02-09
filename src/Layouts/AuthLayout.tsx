import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ErrorPage from '../Pages/ErrorPage'
import UserPage from '../Pages/UserPage'
import SingletonPostPage from '../Pages/SingletonPostPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import { useStateContext } from '../Context/ContextProvider'
import { Provider } from 'jotai'

const AuthLayout = () => {
  const { isAuth } = useStateContext()
  console.log(isAuth)
  return (
    <>
      <Provider>
        <Routes>
          <Route path='/' element={isAuth ? <HomePage /> : <Navigate to="/login" />} />
          <Route path='/user' element={isAuth ? <UserPage /> : <Navigate to="/login" />} />
          <Route path='/post' element={isAuth ? <SingletonPostPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isAuth ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/register" element={!isAuth ? <RegisterPage /> : <Navigate to="/" />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Provider>

    </>
  )
}

export default AuthLayout