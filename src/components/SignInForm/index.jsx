import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { InputField } from '../InputField';

export const SignInForm = () => {
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
            <InputField label="Email" type="email" register={register} required errors={errors} />
            <InputField label="Password" type="password" register={register} required errors={errors} />
            <button type="submit" className="btnform col-lg-12 col-12">sign in</button>
        </form>
    )
}
