import React, { useState, useRef } from "react";
import Header from "./Header";
import background from "../utils/assets/images/background.jpg";
import {checkVlidateData} from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () => {
    // validate form data
    const messg = checkVlidateData(name.current.value, email.current.value, password.current.value);
    setErrMsg(messg);
  }

  const toggleSigninForm = () => {
    setIsSigninForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background} alt="background_img" />
      </div>
      <form onSubmit={(e) => {e.preventDefault()}} className="absolute w-3/12 my-36 mx-auto bg-black bg-opacity-90 rounded-xl right-0 left-0 text-white p-7">
        <h1 className="font-bold text-3xl py-3 mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          ref={name}
          placeholder="Full Name"
          className="p-2 mb-4 w-full bg-gray-800"
        />}
        <input
          type="text"
          ref={email}
          placeholder="Enter Email"
          className="p-2 mb-4 w-full bg-gray-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-2 w-full bg-slate-800"
        />
        <p className="text-red-500 text-bold text-lg py-3">{errMsg}</p>
        <button className="py-2 mb-4 w-full bg-red-700" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <p className="cursor-pointer" onClick={toggleSigninForm}>
            {isSignInForm
              ? "New to Netflix ? Sign Up Now"
              : "Already have an account? Sign In now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
