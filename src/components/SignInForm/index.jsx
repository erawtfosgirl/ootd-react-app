import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import { Alert, Stack } from '@mui/material';
import { getUsersData } from '../../redux/reducers/usersSlice';

export const SignInForm = () => {
    const { setCheckUser } = useContext(UserContext);
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users.data);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        criteriaMode: 'all'
    });

    useEffect(() => {
        dispatch(getUsersData());
    }, [dispatch])
    

    const onSubmit = (data) => {
        const { email, password } = data;
        const checkUser = usersData.find(user => user.email === email && user.password === password);

        if (checkUser) {
            setCheckUser(checkUser);
            navigate('/');
        }
        else {
            setError("Email or password is incorrect!");
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
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
            <label htmlFor="email">
                Email
                <span>*</span>
            </label>
            <input
                className='textinp col-12 col-lg-12'
                placeholder='Email'
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
                placeholder='Password'
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
            {error && (
                <Stack
                    spacing={2}
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        zIndex: "5555",
                    }}
                >
                    <Alert severity="error">{error}</Alert>
                </Stack>
            )}
            <button type="submit" className="btnform col-lg-12 col-12">Sign in</button>
        </form>
    )
}
