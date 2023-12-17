import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from '../../components/CartItem';
import { clearBasket } from '../../redux/reducers/basketSlice';

export const CartProduct = () => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket);


    const calculateSubtotal = () => {
        let subtotal = 0;

        basket.forEach(product => {
            subtotal += product.price * product.quantity;
        });

        return subtotal.toFixed(2);
    };

    return (
        <section className="cart-products-section">
            <div className="container">
                <div className="title col-lg-8 col-12 mb-4 d-flex justify-content-between align-items-center">
                    <h2>My Shopping Cart</h2>
                    <button type="button" onClick={() => dispatch(clearBasket())}>Remove All</button>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-start">
                    <div className="left col-lg-8 col-md-12 col-sm-12 col-12">
                        {basket.map(product => (
                            <CartItem
                                key={product.id}
                                id={product.id}
                                thumbnail={product.thumbnail}
                                name={product.name}
                                quantity={product.quantity}
                                price={product.price}
                            />
                        ))}
                    </div>
                    <div className="right col-lg-4 col-md-12 col-sm-12 col-12 ps-lg-3 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                        <ul>
                            <li>
                                <span>Subtotal :</span>
                                <span>{`${calculateSubtotal()}$`}</span>
                            </li>
                            <li>
                                <span>Delivery :</span>
                                <span>FREE</span>
                            </li>
                            <li>
                                <span>Total :</span>
                                <span>{`${calculateSubtotal()}$`}</span>
                            </li>
                        </ul>
                        <a href="#" className="col-12">
                            Go to checkout
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
