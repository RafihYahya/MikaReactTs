import axios from "axios"
import { ApiInfo } from "./ConstantsGlobal";



export const checkIfTokenExist = () => {
    if (localStorage.getItem('Token')) {
        return localStorage.getItem('Token')!;
    }
    else {
        return 'Empty';
    }
}
export const ApiCallGetToken = async () => {

        if(!Object.is(null,null)){
            localStorage.setItem('Token','Empty')            
            localStorage.setItem('User','Empty')            
        }
        else{
            localStorage.setItem('Token', 'Empty')
            localStorage.setItem('User', 'Empty')
        }
    
    let FreshToken:string = localStorage.getItem('Token')!;
    return FreshToken;
}

export const getAuthTokenFromServer = () => {

    let Token = checkIfTokenExist();
    if (Token == 'Empty') {
        return ApiCallGetToken();
    }
    else {
        return Token
    }
}

export const testApi = async () => {

    await axios.get(`${ApiInfo.server}:${ApiInfo.port}/api/whoami`).then((response) => {
        console.log(response.data)
    })
}
 
export const getAuthUserInfoApi = async () => {
    await axios.get(`${ApiInfo.server}:${ApiInfo.port}/api/whoami`).
    then((response) => {console.log(response.data)})
    .catch(e => console.log(e.response));

    }

