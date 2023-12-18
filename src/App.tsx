import { useState } from 'react';
import GuestLayout from './Layouts/GuestLayout'
import AuthLayout from './Layouts/AuthLayout';


const App = () => {
  const [AuthToggle] = useState<boolean>(false);
  return (
    <>

      {!AuthToggle ? <AuthLayout /> : <GuestLayout />}

    </>
  )
}

export default App
