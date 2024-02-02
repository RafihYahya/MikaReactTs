import axios from "axios"

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
            localStorage.setItem('Token', response.data.title)
            
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

