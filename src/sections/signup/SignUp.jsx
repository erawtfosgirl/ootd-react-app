import React from 'react'
import { SignUpForm } from '../../components/SignUpForm/SignUpForm'

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
                </div>
            </div>
        </section>

    )
}
