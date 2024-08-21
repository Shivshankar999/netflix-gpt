import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_LOGO, LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toogleGptSearchView } from "../utils/gptSlice";
import { addLanguageChange } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        // dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  const handleGptLanguageChange = (e) => {
    dispatch(addLanguageChange(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="LOGO" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleGptLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.indetifier} value={lang.indetifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 px-4 py-2 mx-4 my-2  text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "Gpt Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 md:mt-4"
            src={AVATAR_LOGO}
            alt="user-icon"
          />

          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
