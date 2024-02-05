import axios from "axios";
import { ApiInfo } from "../ConstantsGlobal";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { useState } from "react";

const RegisterComp = () => {
  const [Errorhandler, setErrorhandler] = useState(null);
  const [InputValue, setInputValue] = useState({
    email:'Enter Email',
    password:'Enter Password',
  });
  const navigate = useNavigate();
  const { setAuthToken } = useStateContext();

  const LoginApiRequest = async (email: string | Blob, password: string | Blob) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    await axios.post(`${ApiInfo.server}:${ApiInfo.port}/api/login`, form).then((response) => {
      setAuthToken(response.data.data.token);
      localStorage.setItem('Token', response.data.data.token);
      return navigate("/");
    }).catch(e => setErrorhandler(e.toJSON()));
    
  }
  return (
    <div className="  sm:scale-75 w-full h-[85vh] my-10 sm:my-0 md:scale-100  md:pt-0 pt-[50vh] lg:scale-[90%] 3xl:scale-100 ">
      <div className=" max-w-[1500px] w-full h-full flex items-center mx-auto ">
        <div className="mx-auto max-w-lg scale-125 sm:scale-110 p-4 rounded-lg ">
          <h1 className="uppercase text-center text-2xl font-bold text-pink-200/80 sm:text-3xl">
            Welcome Back !
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500  ">
            Login with your account, To get access to the full features of Mika.
          </p>

          <form
            action=""
            className="   mb-0  space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 relative"
          >
            <p onClick={() => console.log(Errorhandler)} className={Object.is(Errorhandler, null) ? "hidden" : "cursor-default lg:translate-y-[-10px] text-md uppercase text-center text-black font-bold backdrop-blur-md p-4  rounded-md bg-red-500/75"}>Wrong Credentials</p>

            <p className="text-center text-lg font-medium">
              Sign In to your account
            </p>

            <div>




              <label htmlFor="email" className="sr-only">
                email
              </label>

              <div className="relative my-4">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#2c2c2c]"
                  onChange={e =>  setInputValue({...InputValue,email:e.target.value})}
                  placeholder={InputValue.email}
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

              <div className="relative my-4 pb-2">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#2c2c2c]"
                  onChange={e =>  setInputValue({...InputValue,password:e.target.value})}
                  placeholder={InputValue.password}
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


            </div>

            <div
              onClick={() => { LoginApiRequest(InputValue.email, InputValue.password) }}
              className=" cursor-pointer text-center transition-all duration-300 hover:text-violet-200 hover:bg-pink-600 text-md block w-full rounded-lg bg-pink-600/75 px-5 py-3  font-medium text-white"
            >
              Sign In
            </div>

            <p className="text-center text-sm text-gray-500">
              You Don't Have An Account ?
              <a className="underline px-2 " href="">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComp;
