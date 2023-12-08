import React from 'react'

export const Newsletter = () => {
    return (
        <section className="newsletter-section mt-5">
            <div className="container h-100">
                <form className="d-flex flex-column h-100 justify-content-center align-items-center gap-4 text-center newsletter-content">
                    <h1 className="title">
                        THE MOST OOTD OF THE SEASON IT’S IN OUR NEWSLETTER!
                    </h1>
                    <div className="subtitle">SUBSCRIBE TO OUR NEWSLETTER</div>
                    <input type="email" placeholder="E-mail" required="" />
                    <button type="button">I'M IN</button>
                </form>
            </div>
        </section>

    )
}
