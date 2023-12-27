import React from 'react'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/reducers/usersSlice';

export const SignUpForm = () => {
    const dispatch=useDispatch();
    const users=useSelector(state=>state.users)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        criteriaMode: 'all'
    });


    const onSubmit = (data) => {
        console.log(data);
        dispatch(addUser(data))
    };

    const renderErrorMessages = (messages) => {
        return messages
            ? Object.entries(messages).map(([type, message]) => (
                <span key={type} style={{ color: 'red' }}>
                    {message}
                </span>
            ))
            : null;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-12">
            <label htmlFor="firstname">First Name</label>
            {JSON.stringify(users)}
            <input
                className='textinp col-12 col-lg-12'
                {...register("firstname", {
                    required: "Firstname is required.",
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "First name must contain only letters."
                    }
                })}
            />
            <ErrorMessage
                errors={errors}
                name="firstname"
                render={({ messages }) => renderErrorMessages(messages)}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                className='textinp col-12 col-lg-12'
                {...register("lastname", {
                    required: "Lastname is required.",
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Last name must contain only letters."
                    }
                })}
            />
            <ErrorMessage
                errors={errors}
                name="lastname"
                render={({ messages }) => renderErrorMessages(messages)}
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
                render={({ messages }) => renderErrorMessages(messages)}
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
                render={({ messages }) => renderErrorMessages(messages)}
            />
            <button type="submit" className="btnform col-lg-12 col-12">Register</button>
        </form>
    )
}
