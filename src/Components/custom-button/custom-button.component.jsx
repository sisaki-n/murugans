import React from 'react';
import './custom-button.styles.scss';

const CustomButton =({children,IsGoogleSignIn ,...OtherButtonProps})=>(
   
        <button className={ (IsGoogleSignIn ? "google-sign-in" :" " )+" custom-button"} {...OtherButtonProps}>
            {children}
        </button>
    
);
export default CustomButton;