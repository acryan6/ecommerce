import React from "react";
import { SignInAndUpContainer } from "./sign-in-up.styles";
import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

const SignInAndUp = () => (
  <SignInAndUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndUpContainer>
);

export default SignInAndUp;
