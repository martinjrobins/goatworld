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
    const setUser = (user) => {
      if (user) {
        app.database().ref('goats/' + user.uid).on('value', (snapshot) => {
          console.log(`new user ${user.uid}`);
          console.log(`got user data ${snapshot.val()}`);
          const data = snapshot.val();
          setCurrentUser({
            user,
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
