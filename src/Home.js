import React, {
  useContext
} from "react";
import {
  withRouter
} from "react-router";
import app from "./base";
import {
  AuthContext
} from "./Auth";

import generateGoatName from "./NameGenerator.js"

const Home = () => {
  const {
    currentUser
  } = useContext(AuthContext);
  return (
    <>
      <h1>Your goat name is {currentUser.data.name}</h1> <
    button onClick = {
      () => {
        app.database().ref('goats/' + currentUser.user.uid).set({
          name: generateGoatName(),
        });
      }
    } > Rename <
    /button>

    <
    button onClick = {
      () => {
        app.auth().signOut();
      }
    } > Sign out < /button> 

    <
    />
  );

};

export default withRouter(Home);
