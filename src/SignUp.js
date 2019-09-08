import React, {
  useCallback
} from "react";
import {
  withRouter
} from "react-router";
import app from "./base.js";
import generateGoatName from "./NameGenerator.js"

const SignUp = ({
  history
}) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const {
      email,
      password
    } = event.target.elements;
    try {
      const result = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      console.log(result);

      app.database().ref('goats/' + result.user.uid).set({
        name: generateGoatName(),
      });

      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
