import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/home";
import { AboutPage } from "../pages/about";
import { ShopPage } from "../pages/shop";
import { ContactPage } from "../pages/contact";
import { FaqPage } from "../pages/faq";
import { WishlistPage } from "../pages/wishlist";
import { CartPage } from "../pages/cart";
import { SignInPage } from "../pages/signIn";
import { SignUpPage } from "../pages/signUp";
import { ProductDetail } from "../pages/productDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/shop",
                element: <ShopPage />
            },
            {
                path: "/product/:id",
                element: <ProductDetail />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/faq",
                element: <FaqPage />
            },
            {
                path: "/wishlist",
                element: <WishlistPage />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/signin",
                element: <SignInPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            },
        ]

    }
])