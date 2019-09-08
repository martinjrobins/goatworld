import React, {
  useEffect,
  useState
} from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const setUser = (newUser) => {
      if (newUser) {
        app.database().ref('goats/' + newUser.uid).on('value', (snapshot) => {
          console.log(`new user ${newUser.uid}`);
          console.log(`got user data ${snapshot.val()}`);
          const data = snapshot.val();
          setCurrentUser({
            newUser,
            data,
          });
        });
      } else {
        setCurrentUser(null);
      }
    };
    app.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
