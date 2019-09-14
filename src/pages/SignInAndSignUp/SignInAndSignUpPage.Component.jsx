import React from 'react';
import './SignInAndSignUpPage.Styles.scss';
import SignIn from '../../Components/Sign-In/signin.component';
import SingUp from '../../Components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sing-up">
    <SignIn/>
    <SingUp/>
    </div>
);

export default SignInAndSignUpPage;