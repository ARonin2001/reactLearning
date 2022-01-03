import React from 'react';

export const withValidationElement = Element => ({input, meta, ...props}) => {
    return (
        <div>
            <Element {...input} {...props} />
            {meta.touched && meta.error && <span>{meta.error}</span>} 
        </div>
    )
}