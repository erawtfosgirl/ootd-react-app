import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignInForm } from '../../components/SignInForm'

export const SignIn = () => {
    return (
        <section className="loginregister-section">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1>Welcome back</h1>
                    <p className="headertxt">Please enter your detail and find your look</p>
                    <SignInForm />
                    <div className="col-lg-12 col-12 bottom text-center">
                        Don't have an account?{" "}
                        <NavLink to='/signup' className="here">
                            Sign up here
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>

    )
}
