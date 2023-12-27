import React from 'react'

export const InputField = ({ label, register, required, errors }) => {
    const fieldName = label.toLowerCase().replace(/\s/g, '');
    return (
        <>
            <label>
                {label}
                {required && <span>*</span>}
            </label>
            <input {...register(fieldName, { required })} className="textinp col-12 col-lg-12" />
            {errors && errors[fieldName] && <span style={{ color: 'red' }}>{label} is required</span>}
        </>
    )
}
