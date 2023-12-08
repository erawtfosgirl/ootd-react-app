import React from 'react'

export const SignUp = () => {
    return (
        <section className="loginregister-section">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1>Create an Account</h1>
                    <p className="headertxt">
                        Register for faster checkout, track your order's status, and more
                    </p>
                    <form method="post" action="" className="col-lg-6 col-12">
                        <label htmlFor="firtname">First Name</label>
                        <input
                            id="firstname"
                            className="textinp col-12 col-lg-12"
                            required=""
                            type="text"
                            placeholder="Enter your email address"
                        />
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            id="lastname"
                            className="textinp col-12 col-lg-12"
                            required=""
                            type="text"
                            placeholder="Enter your email address"
                        />
                        <label htmlFor="emaillogin">
                            Email <span>*</span>
                        </label>
                        <input
                            id="emaillogin"
                            className="textinp col-12 col-lg-12"
                            required=""
                            type="text"
                            placeholder="Enter your email address"
                        />
                        <label htmlFor="password">
                            Password <span>*</span>
                        </label>
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
                        <button type="submit" className="btnform col-lg-12 col-12">
                            Register
                        </button>
                        <div className="col-lg-12 col-12 bottom text-center">
                            Already have an account?
                            <a href="login.html" className="here">
                                {" "}
                                Sign in here
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}
