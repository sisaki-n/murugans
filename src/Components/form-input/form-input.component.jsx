import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange,label,...OtherFormInputProps}) =>(
<div className="group">
<input className="form-input" onChange={handleChange} {...OtherFormInputProps} />
{
    label ? (<label className={ (OtherFormInputProps.value.length ? 'shrink' : '') +' form-input-label'} >
         {label}</label>)
         :null
}
</div>
);

export default FormInput;