import React from 'react'

export const Faq = () => {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="row g-3">
                    <h1 className="text-center">How can we help you ?</h1>
                    <div className="faq-item">
                        <h5 className="question">WHERE CAN I RECEIVE MY ORDER?</h5>
                        <div className="answer">
                            <p>
                                You can receive it at a private address (home, work or a drop
                                point), but never a post office box or at a OOTD store of your
                                choice.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <h5 className="question">WHAT IS THE PROCESS FOR HOME DELIVERY?</h5>
                        <div className="answer">
                            <p>
                                If you have chosen home delivery, we will send you a confirmation
                                e-mail when your order is going to leave the warehouse, another
                                e-mail with a tracking number and a link to the courier's website,
                                and finally the courier will contact you via SMS or e-mail to notify
                                you when your order will be delivered.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <h5 className="question">HOW LONG DO I HAVE TO MAKE RETURNS?</h5>
                        <div className="answer">
                            <p>
                                The deadline for all returns is 30 calendar days from the date you
                                receive the Shipping Confirmation.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <h5 className="question">CAN I CANCEL MY ORDER?</h5>
                        <div className="answer">
                            <p>
                                Yes. You can cancel your order from the orders placed section of
                                your account.Yes. You can cancel your order from the orders placed
                                section of your account. If you placed the order as a Guest, you can
                                cancel the order form the confirmation email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
