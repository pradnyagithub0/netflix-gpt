import React, { useEffect } from "react";
import Netflix_Logo from "../assets/images/Netflix_Logo.png";
import profileImg from "../assets/images/profileImg.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={Netflix_Logo} alt="logo_image" className="w-44" />
      {user && (
        <div className="flex items-center p-2">
          {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPORTED_LANGUAGES.map(lang =>
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )}
          </select>)}
          <button className="px-4 py-2 mx-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
          {/* <h3 className="me-4 font-bold text-white">{user?.displayName}</h3> */}
          <img
            src={user?.photoURL}
            alt="profileImage"
            className="w-10 h-10 me-2 rounded-full"
          />
          <button
            onClick={handleSignOut}
            className="text-white p-2 rounded-xl"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
