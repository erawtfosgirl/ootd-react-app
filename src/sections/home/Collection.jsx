import React from 'react'

import Collection1 from '../../assets/images/7950939625_9_1_1.jpg'

export const Collection = () => {
    return (
        <section className="collection-section mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img
                            className="img-fluid"
                            src={Collection1}
                            alt="Image"
                        />
                    </div>
                    <div className="col-lg-6 col-12 p-3 collection-content">
                        <h1>Extra 10% off on summer collection</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                            commodi tempora, aut omnis maiores rem numquam id perferendis delectus
                            quos, deleniti temporibus saepe animi facilis incidunt, non doloremque
                            esse soluta!
                        </p>
                        <a href="#shop">Shop Now</a>
                    </div>
                </div>
            </div>
        </section>

    )
}
