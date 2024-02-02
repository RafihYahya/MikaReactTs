import  {   createContext, useContext, useState } from 'react'

const StateContext = createContext({
    user:'none',
    isAuth:false,
    AuthToken:'',
    setUser: (_: string) => { } ,
    setAuthToken: (_: string) => {},
    setIsAuth: (_:boolean) => {},
    
});
const ContextProvider = ({children}:any) => {

    const [User,setUser] = useState('');
    const [Token,setToken] = useState('Empty');
    const [IsAuth,setIsAuth] = useState(false);

    
    

  return (
    <StateContext.Provider value={{
        user:User,
        AuthToken:Token,
        isAuth:IsAuth,
        setUser:setUser,
        setAuthToken:setToken,
        setIsAuth:setIsAuth,
    }}>
        {children}
    </StateContext.Provider>
  )
}

export default ContextProvider

export const useStateContext = () => useContext(StateContext)