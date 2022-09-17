import { useState } from "react";
import LoginForm from "../components/loginForm";
import Register from "../components/regisForm";

function Login() {
  const [inOrup, setInOrUp] = useState("login");

  const renderForm = () => {
    if (inOrup === "login") {
      return <LoginForm />;
    }
    if (inOrup === "signup") {
      return <Register />;
    }
  };

  return (
    <>
      <div className="container min-h-screen mx-auto md:flex justify-between font-inter">
        <div className="hidden md:grow md:flex align-middle w-3/4 lg:w-auto">
          <img
            className="max-h-screen w-auto"
            src="votebg.svg"
            alt="Vote Img"
          />
        </div>
        <div className="relative max-w-md sm:self-end md:w-3/4 align my-auto h-screen ">
          <h1 className="text-4xl mx-auto w-fit font-semibold py-10">
            PILKETOS
          </h1>
          <div id="form-wrapper">
            <div id="loginregis" className="flex justify-around">
              <button
                onClick={() => setInOrUp("login")}
                className={`font-semibold w-full rounded-t-xl  py-2 bg-gray-200 text-gray-400 ${
                  inOrup === "login" && "  bg-gray-500 text-white/100"
                }`}
              >
                <h2 className="text-2xl">Login</h2>
              </button>
              <button
                onClick={() => setInOrUp("signup")}
                className={`font-semibold w-full rounded-t-xl  py-2 bg-gray-200 text-gray-400 ${
                  inOrup === "signup" && "  bg-gray-500 text-white/100"
                }`}
              >
                <h2 className="text-2xl">Sign Up</h2>
              </button>
            </div>
            {renderForm()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
