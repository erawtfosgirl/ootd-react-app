import React from 'react'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        criteriaMode: 'all'
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-12">
            <label htmlFor="firstname">First Name</label>
            <input
                className='textinp col-12 col-lg-12'
                {...register("firstname", {
                    required: "Firstname is required.",
                    pattern: {
                        value: /\d+/,
                        message: "This input is number only."
                    }
                })}
            />
            <ErrorMessage
                errors={errors}
                name="firstname"
                render={({ messages }) => {
                    console.log("messages", messages);
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <span key={type} style={{ color: 'red' }}>{message}</span>
                        ))
                        : null;
                }}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                className='textinp col-12 col-lg-12'
                {...register("lastname", {
                    required: "Lastname is required.",
                    pattern: {
                        value: /\d+/,
                        message: "This input is number only."
                    }
                })}
            />
            <ErrorMessage
                errors={errors}
                name="lastname"
                render={({ messages }) => {
                    console.log("messages", messages);
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <span key={type} style={{ color: 'red' }}>{message}</span>
                        ))
                        : null;
                }}
            />
            <label htmlFor="email">
                Email
                <span>*</span>
            </label>
            <input
                className='textinp col-12 col-lg-12'
                {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address."
                    }
                })}
            />
            <ErrorMessage
                errors={errors}
                name="email"
                render={({ messages }) => {
                    console.log("messages", messages);
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <span key={type} style={{ color: 'red' }}>{message}</span>
                        ))
                        : null;
                }}
            />
            <label htmlFor="password">
                Password
                <span>*</span>
            </label>
            <input
                className='textinp col-12 col-lg-12'
                {...register("password", {
                    required: "Password is required.",
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                        message: "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character."
                    }
                })}
            />
            <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) => {
                    console.log("messages", messages);
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <span key={type} style={{ color: 'red' }}>{message}</span>
                        ))
                        : null;
                }}
            />
            <button type="submit" className="btnform col-lg-12 col-12">Register</button>
        </form>
    )
}
