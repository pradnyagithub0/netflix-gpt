import React, { useState, useRef } from "react";
import Header from "./Header";
import background from "../assets/images/background.jpg";
import { checkVlidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate form data
    const messg = checkVlidateData(
      email.current.value,
      password.current.value
    );
    setErrMsg(messg);

    if (messg) return; //if messge exist means error is there so will stop exeution here otherwise go to next line

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
        
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    }

    // other way to do the same thing is u can wriye like this but 1st one is good way to do this

    if (!messg) {
      // write sign in / sign up logic here
    }
  };

  const toggleSigninForm = () => {
    setIsSigninForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background} alt="background_img" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 my-36 mx-auto bg-black bg-opacity-90 rounded-xl right-0 left-0 text-white p-7"
      >
        <h1 className="font-bold text-3xl py-3 mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 mb-4 w-full bg-gray-800"
          />
        )}
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
        <button
          className="py-2 mb-4 w-full bg-red-700"
          onClick={handleButtonClick}
        >
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
