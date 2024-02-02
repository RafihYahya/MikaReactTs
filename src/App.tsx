import AuthLayout from './Layouts/AuthLayout';
import { useStateContext } from './Context/ContextProvider';
import { useEffect } from 'react';
import { getAuthTokenFromServer } from './ApiUtils';


const App = () => {

  const {  setAuthToken, AuthToken, setIsAuth } = useStateContext();
  const AsyncWrapper = async () => {
    let Temp = await getAuthTokenFromServer();
    console.log(AuthToken)
    setAuthToken(Temp);
    console.log(AuthToken)
    AuthToken == 'Empty' ? setIsAuth(false) : setIsAuth(true);

  }
  useEffect(() => {
    AsyncWrapper();


  }, [AuthToken])

  return (
    <>

      <div id='MainPageFade' className=''><AuthLayout /></div>


    </>
  )
}

export default App
