import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProductCard({ product }) {

    return (
        <article className="product-card">

            {/* =================================================
               PRODUCT IMAGE
            ================================================= */}

            <div className="product-image-wrapper">

                {product.image ? (

                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                    />

                ) : (

                    <div className="product-image-placeholder">
                        {product.name}
                    </div>

                )}

                {/* Floating product number */}

                <span className="product-number">
                    {String(product.id).padStart(2, "0")}
                </span>

            </div>


            {/* =================================================
               PRODUCT INFORMATION
            ================================================= */}

            <div className="product-info">

                <div className="product-title-row">

                    <h2>
                        {product.name}
                    </h2>

                </div>


                <p>
                    {product.description}
                </p>


                {/* =================================================
                   PRICE + VIEW
                ================================================= */}

                <div className="product-bottom">

                    <span className="product-price">
                        ₹{product.price?.toLocaleString("en-IN")}
                    </span>


                    <Link
                        to={`/products/${product.id}`}
                        className="view-button"
                    >
                        <span>
                            View
                        </span>

                        <ArrowUpRight
                            size={15}
                        />
                    </Link>

                </div>

            </div>

        </article>
    );
}

export default ProductCard;