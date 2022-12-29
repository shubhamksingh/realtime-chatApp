import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
        // console.log(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthContextProvider;
