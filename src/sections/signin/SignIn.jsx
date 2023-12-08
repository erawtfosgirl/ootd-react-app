import React from 'react'

export const SignIn = () => {
    return (
        <section className="loginregister-section">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1>Welcome back</h1>
                    <p className="headertxt">Please enter your detail and find your look</p>
                    <form method="post" action="" className="col-lg-6 col-12">
                        <label htmlFor="emaillogin">Email</label>
                        <input
                            id="emaillogin"
                            className="textinp col-12 col-lg-12"
                            required=""
                            type="text"
                            placeholder="Enter your email address"
                        />
                        <label htmlFor="password">Password</label>
                        <div className="passwordbox col-12 col-lg-12">
                            <input
                                placeholder="Enter your password"
                                id="password"
                                className="textinp col-12 col-lg-12"
                                required=""
                                type="password"
                            />
                            <svg
                                className="eyeicon open"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                    stroke="#101623"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                />
                            </svg>
                            <svg
                                className="eyeicon closed"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.7148 9.94531L17.4969 13.0319"
                                    stroke="#101623"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.0449 11.6611L12.6007 14.813"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.94843 11.6592L7.39258 14.8116"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.28279 9.94336L2.49219 13.0448"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2.5 8.19336C3.81348 9.81918 6.22141 11.875 10 11.875C13.7787 11.875 16.1866 9.81919 17.5001 8.19338"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="col-lg-12 col-12 d-flex justify-content-between">
                            <div className="col-lg-6 col-6 remembermebox">
                                <input type="checkbox" id="rememberme" />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <div className="col-lg-6 col-6 text-end">
                                <a href="#" className="forgotpassword">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <button type="submit" className="btnform col-lg-12 col-12">
                            SIGN IN
                        </button>
                        <div className="col-lg-12 col-12 bottom text-center">
                            Don't have account yet ?{" "}
                            <a href="register.html" className="here">
                                Register here
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}
