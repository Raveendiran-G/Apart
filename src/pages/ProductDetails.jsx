import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ExternalLink
} from "lucide-react";

import products from "../data/products";


function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
        (item) =>
            String(item.id) === String(id)
    );


    /* =====================================================
       PRODUCT NOT FOUND
    ===================================================== */

    if (!product) {

        return (
            <main className="product-details-page">

                <div className="product-not-found">

                    <p>
                        PRODUCT NOT FOUND
                    </p>

                    <h1>
                        Sorry, we couldn't find
                        that product.
                    </h1>

                    <Link
                        to="/products"
                        className="back-products-button"
                    >
                        <ArrowLeft size={17} />

                        Back to Products
                    </Link>

                </div>

            </main>
        );
    }


    return (
        <main className="product-details-page">


            {/* =================================================
               BACK TO PRODUCTS
            ================================================= */}

            <Link
                to="/products"
                className="details-back-button"
            >
                <ArrowLeft size={17} />

                Back to Products
            </Link>


            {/* =================================================
               PRODUCT DETAILS
            ================================================= */}

            <section className="product-details-container">


                {/* =================================================
                   PRODUCT IMAGE
                ================================================= */}

                <div className="details-image-container">

                    {product.image ? (

                        <img
                            src={product.image}
                            alt={product.name}
                            className="details-product-image"
                        />

                    ) : (

                        <div className="details-image-placeholder">

                            {product.name}

                        </div>

                    )}

                </div>


                {/* =================================================
                   PRODUCT INFORMATION
                ================================================= */}

                <div className="details-product-info">


                    <p className="details-eyebrow">
                        APART COLLECTION
                    </p>


                    <h1>
                        {product.name}
                    </h1>


                    <p className="details-description">
                        {product.description}
                    </p>


                    {/* =================================================
                       PRICE
                    ================================================= */}

                    <div className="details-price">

                        ₹
                        {product.price?.toLocaleString(
                            "en-IN"
                        )}

                    </div>


                    {/* =================================================
                       FEATURES
                    ================================================= */}

                    <div className="details-features">

                        <div>

                            <span>
                                01
                            </span>

                            <p>
                                Minimal design
                            </p>

                        </div>


                        <div>

                            <span>
                                02
                            </span>

                            <p>
                                Designed for everyday
                                experiences
                            </p>

                        </div>


                        <div>

                            <span>
                                03
                            </span>

                            <p>
                                Built around simplicity
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                       OFFICIAL WEBSITE BUTTON
                    ================================================= */}

                    <a
                        href={product.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="official-buy-button"
                    >

                        <span>
                            Visit Official Website
                        </span>

                        <ExternalLink
                            size={17}
                        />

                    </a>


                    {/* =================================================
                       SMALL INFORMATION
                    ================================================= */}

                    <p className="official-link-note">

                        You will be redirected to the
                        official shopping website.

                    </p>

                </div>

            </section>

        </main>
    );
}


export default ProductDetails;