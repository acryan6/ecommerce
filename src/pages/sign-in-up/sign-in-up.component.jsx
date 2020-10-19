import React from 'react';
import './sign-in-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

const SignInAndUp = () => (
  <div className='sign-in-and-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndUp;
