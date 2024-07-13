import React, { useEffect } from "react";
import Netflix_Logo from "../assets/images/Netflix_Logo.png";
import profileImg from "../assets/images/profileImg.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe;
    }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate("/error");
      });
  };


  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={Netflix_Logo} alt="logo_image" className="w-44" />
      {user && (
        <div className="flex items-center p-2">
          <h3 className="me-4 font-bold text-white">Hello!! {user?.displayName}</h3>
          <img
            src={user?.photoURL}
            alt="profileImage"
            className="w-10 h-10 me-2 rounded-full"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white p-2 rounded-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
