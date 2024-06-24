import React, { useState } from "react";
import Header from "./Header";
import background from "../utils/assets/images/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background} alt="background_img" />
      </div>
      <form className="absolute w-3/12 my-36 mx-auto bg-black bg-opacity-90 rounded-xl right-0 left-0 text-white p-7">
        <h1 className="font-bold text-3xl py-3 mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 mb-4 w-full bg-gray-800"
        />}
        <input
          type="text"
          placeholder="Enter Email"
          className="p-2 mb-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-2 mb-4 w-full bg-slate-800"
        />
        <button className="py-2 mb-4 w-full bg-red-700">
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
