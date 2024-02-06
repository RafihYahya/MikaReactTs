import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { useState } from "react";
import axios from "axios";
import { ApiInfo } from "../ConstantsGlobal";

const RegisterComp = () => {
  const [PassVisibToggle, setPassVisibToggle] = useState(false)
  const [Errorhandler, setErrorhandler] = useState({
    msg: '',
    ErrorhandlerFull: ''
  });
  const [InputValue, setInputValue] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConf: '',
  });
  const navigate = useNavigate();
  const { setAuthToken } = useStateContext();

  const RegisterApiRequest = async (name: string | Blob, username: string | Blob, email: string | Blob, password: string | Blob, passwordConf: string | Blob) => {
    if (name == '' || username == '' || email == '' || password == '' || passwordConf == '') {
      setErrorhandler({ ...Errorhandler, msg: 'Please fill out all forms' });
    }
    else {
      const form = new FormData();
      form.append('name', name);
      form.append('username', username);
      form.append('email', email);
      form.append('password', password);
      form.append('password_confirmation', passwordConf);
      await axios.post(`${ApiInfo.server}:${ApiInfo.port}/api/register`, form).then((response) => {
        setAuthToken(response.data.data.token);
        localStorage.setItem('Token', response.data.data.token);
        setTimeout(() => {
          return navigate("/");
        }, 300);
      }).catch((e) => { e.response ? setErrorhandler({ ErrorhandlerFull: e.response.data, msg: e.response.data.data }) : setErrorhandler({ ErrorhandlerFull:e.response,msg:'Error Connexion'}) });
    }

  }

  return (
    <div className="w-full pt-[45vh] sm:pt-0 2xl:pt-0 md:pt-[45vh] lg:pt-[35vh] h-[105vh] md:h-[85vh] my-10 sm:my-0 sm:scale-[100%] md:scale-[115%] lg:scale-[90%] xl:scale-90 md:translate-x-[5%] lg:translate-x-0">
      <div className="max-w-[1500px] w-full h-full flex items-center mx-auto ">
        <div className="scale-125 mx-auto max-w-lg sm:scale-110 md:scale-150 lg:scale-125  2xl:scale-110 p-4 rounded-lg ">
          <h1 className="text-center text-2xl font-bold text-pink-200 sm:text-3xl">
            You Don't Have an Account ? 
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500  ">
            Register An Account.
          </p>

          <form
            action=""
            className=" lg:w-[30vw] 2xl:w-full sm:w-full  w-[90vw] mb-0  space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 "
          >
            <p onClick={() => console.log(Errorhandler)} className={Object.is(Errorhandler.msg, '') ? "hidden" : "cursor-default lg:translate-y-[-10px] text-sm uppercase text-center text-black  font-semibold backdrop-blur-md p-6  rounded-md bg-red-500/75"}>{Errorhandler.msg}</p>

            <p className="text-center text-lg uppercase font-medium">
              Sign Up Now
            </p>

            <div>



              <div className="relative pb-4">
                <input
                  type="text"
                  className={`${InputValue.name == "" ? "border-2 border-red-500" : ""} focus:border-2 focus:border-pink-600 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#2c2c2c]`}
                  placeholder={InputValue.name == '' ? 'Enter Name' : InputValue.name}
                  onChange={e => setInputValue({ ...InputValue, name: e.target.value })}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                </span>
              </div>
              <div className="relative ">
                <input
                  type="text"
                  className={`${InputValue.username == '' ? "border-2 border-red-500" : ""} focus:border-2 focus:border-pink-600 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#2c2c2c]`}
                  placeholder={InputValue.username == '' ? 'Enter Username' : InputValue.username}
                  onChange={e => setInputValue({ ...InputValue, username: e.target.value })}
                />

              </div>
              <label htmlFor="email" className="sr-only">
                email
              </label>

              <div className="relative my-4">
                <input
                  type="email"
                  className={`${InputValue.email == '' ? "border-2 border-red-500" : ""} focus:border-2 focus:border-pink-600 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#2c2c2c]`}
                  placeholder={InputValue.email == '' ? 'Enter Email' : InputValue.email}
                  onChange={e => setInputValue({ ...InputValue, email: e.target.value })}

                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative my-4">
                <input
                  type={`${!PassVisibToggle ? 'password' : 'text'}`}
                  className={` ${InputValue.password == '' ? "border-2 border-red-500" : ""} focus:border-2 focus:border-pink-600 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#2c2c2c]`}
                  placeholder={InputValue.password == '' ? 'Enter Password' : InputValue.password}
                  onChange={e => setInputValue({ ...InputValue, password: e.target.value })}

                />

                <span 
                onClick={() => setPassVisibToggle(!PassVisibToggle)}
                className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={` ${PassVisibToggle ? "text-pink-600" : ""} h-4 w-4 text-gray-400`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative pb-4">
                <input
                  type={`${!PassVisibToggle ? 'password' : 'text'}`}
                  className={`${InputValue.passwordConf == '' ? "border-2 border-red-500" : ""} focus:border-2 focus:border-pink-600 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#2c2c2c]`}
                  placeholder={InputValue.passwordConf == '' ? 'Confirm Password' : InputValue.passwordConf}
                  onChange={e => setInputValue({ ...InputValue, passwordConf: e.target.value })}

                />

                <span 
                
                className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  
                </span>
              </div>

            </div>

            <div
              onClick={() => { RegisterApiRequest(InputValue.name, InputValue.username, InputValue.email, InputValue.password, InputValue.passwordConf) }}
              className="text-center cursor-pointer transition-all duration-300 hover:text-violet-200 hover:bg-pink-600 text-md block w-full rounded-lg bg-pink-600/75 px-5 py-4  font-medium text-white"
            >
              Sign Up
            </div>

            <p className="text-center text-sm text-gray-500">
              Already Registered
              <Link className="underline px-2 " to="/login" >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComp;
