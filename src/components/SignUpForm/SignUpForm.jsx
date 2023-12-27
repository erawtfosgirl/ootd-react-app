import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { InputField } from './InputField';

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-12">
            <InputField label="First Name" type="text" register={register} />
            <InputField label="Last Name" type="text" register={register} />
            <InputField label="Email" type="email" register={register} required errors={errors} />
            <InputField label="Password" type="password" register={register} required errors={errors} />
            <button type="submit" className="btnform col-lg-12 col-12">Register</button>

            <div className="col-lg-12 col-12 bottom text-center">
                Already have an account?{" "}
                <NavLink to='/signin' className="here">
                    Sign in here
                </NavLink>
            </div>
        </form>
    )
}
