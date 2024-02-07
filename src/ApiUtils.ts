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

    await axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        if(!Object.is(response.data,null)){
            localStorage.setItem('Token','Empty')
            
        }
        else{
            localStorage.setItem('Token', 'Empty')
        }
    })
    let FreshToken:string = localStorage.getItem('Token')!;
    return FreshToken;
}

export const getAuthTokenFromServer = () => {

    let Token = checkIfTokenExist();
    if (Token == 'Empty') {
        return ApiCallGetToken();
    }
    else {
        console.log(Token)
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

