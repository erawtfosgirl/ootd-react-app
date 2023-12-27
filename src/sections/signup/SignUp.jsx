import React from 'react'
import { SignUpForm } from '../../components/SignUpForm'
import { NavLink } from 'react-router-dom'

export const SignUp = () => {
    return (
        <section className="loginregister-section">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1>Create an Account</h1>
                    <p className="headertxt">
                        Register for faster checkout, track your order's status, and more
                    </p>
                    <SignUpForm />
                    <div className="col-lg-12 col-12 bottom text-center">
                        Already have an account?{" "}
                        <NavLink to='/signin' className="here">
                            Sign in here
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>

    )
}
