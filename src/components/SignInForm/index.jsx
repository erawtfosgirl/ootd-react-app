import React from 'react'
import { useForm } from "react-hook-form";

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
          
            <button type="submit" className="btnform col-lg-12 col-12">sign in</button>
        </form>
    )
}
