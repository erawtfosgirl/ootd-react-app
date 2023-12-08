import React from 'react'

export const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <h1 className="col-lg-12 text-center">CONTACT US</h1>
                    <form
                        action="#"
                        className="col-lg-6 col-12"
                        id="formcontact"
                        method="post"
                    >
                        <input
                            type="text"
                            name="contactname"
                            id="contactname"
                            placeholder="Name"
                            required=""
                            className="col-lg-12"
                        />
                        <input
                            type="text"
                            name="contactsurname"
                            id="contactsurname"
                            placeholder="Surname"
                            required=""
                            className="col-lg-12"
                        />
                        <input
                            type="tel"
                            name="contactphone"
                            id="contactphone"
                            placeholder="Phone"
                            required=""
                            className="col-lg-12"
                        />
                        <input
                            type="email"
                            name="contactemail"
                            id="contactemail"
                            placeholder="Email"
                            required=""
                            className="col-lg-12"
                        />
                        <textarea
                            className="col-lg-12"
                            name="contacttext"
                            id="contacttext"
                            cols={10}
                            rows={10}
                            placeholder="Your Text"
                            defaultValue={""}
                        />
                        <button type="submit" form="formcontact" className="col-lg-12">
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}
