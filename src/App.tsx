import AuthLayout from './Layouts/AuthLayout';
import { useStateContext } from './Context/ContextProvider';
import { useEffect } from 'react';
import { getAuthTokenFromServer } from './ApiUtils';
import axios from 'axios';


const App = () => {

  const {  setAuthToken, AuthToken, setIsAuth } = useStateContext();
  const AsyncWrapper = async () => {
    let Temp = await getAuthTokenFromServer();
    setAuthToken(Temp);
    AuthToken == 'Empty' ? setIsAuth(false) : setIsAuth(true);

  }
  axios.defaults.headers.common = {
    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
    "Content-Type":'application/vnd.api+json',
    "Accept":'application/vnd.api+json'   
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
