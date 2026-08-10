import {
    useMemo,
    useState
} from "react";

import {
    Search,
    X,
    SlidersHorizontal
} from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";


function Products() {

    /* =====================================================
       # STATE
    ===================================================== */

    const [searchTerm, setSearchTerm] = useState("");

    const [sortBy, setSortBy] =
        useState("featured");

    const [sortOpen, setSortOpen] =
        useState(false);


    /* =====================================================
       # SORT OPTIONS
    ===================================================== */

    const sortOptions = [
        {
            value: "featured",
            label: "Sort by"
        },
        {
            value: "price-low",
            label: "Price: Low → High"
        },
        {
            value: "price-high",
            label: "Price: High → Low"
        },
        {
            value: "name-az",
            label: "Name: A → Z"
        },
        {
            value: "name-za",
            label: "Name: Z → A"
        }
    ];


    /* =====================================================
       # SEARCH + SORT
    ===================================================== */

    const filteredProducts = useMemo(() => {

        let result = [...products];


        /* -------------------------------------------------
           SEARCH
        ------------------------------------------------- */

        const search =
            searchTerm
                .trim()
                .toLowerCase();


        if (search) {

            result = result.filter(
                (product) => {

                    const name =
                        product.name
                            ?.toLowerCase() || "";

                    const description =
                        product.description
                            ?.toLowerCase() || "";

                    return (
                        name.includes(search) ||
                        description.includes(search)
                    );
                }
            );
        }


        /* -------------------------------------------------
           SORT
        ------------------------------------------------- */

        if (sortBy === "price-low") {

            result.sort(
                (a, b) =>
                    Number(a.price) -
                    Number(b.price)
            );

        }

        else if (sortBy === "price-high") {

            result.sort(
                (a, b) =>
                    Number(b.price) -
                    Number(a.price)
            );

        }

        else if (sortBy === "name-az") {

            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }

        else if (sortBy === "name-za") {

            result.sort(
                (a, b) =>
                    b.name.localeCompare(
                        a.name
                    )
            );
        }


        return result;

    }, [
        searchTerm,
        sortBy
    ]);


    /* =====================================================
       # CURRENT SORT LABEL
    ===================================================== */

    const currentSort =
        sortOptions.find(
            (option) =>
                option.value === sortBy
        );


    /* =====================================================
       # RESET SEARCH
    ===================================================== */

    const clearSearch = () => {

        setSearchTerm("");

    };


    /* =====================================================
       # CHANGE SORT
    ===================================================== */

    const handleSortChange = (value) => {

        setSortBy(value);

        setSortOpen(false);

    };


    /* =====================================================
       # PAGE
    ===================================================== */

    return (

        <main className="products-page">


            {/* =================================================
               # PRODUCTS HEADER
            ================================================= */}

            <section className="products-header">

                <p>
                    APART COLLECTION
                </p>

                <h1>
                    Products
                </h1>

                <span>
                    Discover something that feels different.
                </span>

            </section>


            {/* =================================================
               # SEARCH
            ================================================= */}

            <div className="products-search-wrapper">

                <div className="products-search">

                    <Search
                        size={19}
                        className="search-icon"
                    />


                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(
                                event.target.value
                            )
                        }
                    />


                    {searchTerm && (

                        <button
                            type="button"
                            className="search-clear"
                            onClick={clearSearch}
                            aria-label="Clear search"
                        >

                            <X size={18} />

                        </button>

                    )}

                </div>

            </div>


            {/* =================================================
               # SORT ROW
            ================================================= */}

            <div className="products-sort-row">


                {/* PRODUCT COUNT */}

                <div className="products-count">

                    {filteredProducts.length}{" "}

                    {filteredProducts.length === 1
                        ? "product"
                        : "products"}

                </div>


                {/* =================================================
                   # CUSTOM SORT DROPDOWN
                ================================================= */}

                <div className="custom-sort">


                    {/* SORT BUTTON */}

                    <button
                        type="button"
                        className="sort-trigger"
                        onClick={() =>
                            setSortOpen(
                                !sortOpen
                            )
                        }
                    >

                        <SlidersHorizontal
                            size={16}
                        />


                        <span>
                            {currentSort?.label}
                        </span>


                        <span
                            className={
                                sortOpen
                                    ? "sort-arrow open"
                                    : "sort-arrow"
                            }
                        >
                            ↓
                        </span>

                    </button>


                    {/* =================================================
                       # SORT MENU
                    ================================================= */}

                    {sortOpen && (

                        <div className="sort-menu">

                            {sortOptions.map(
                                (option) => (

                                    <button
                                        key={
                                            option.value
                                        }
                                        type="button"
                                        className={
                                            sortBy ===
                                            option.value
                                                ? "sort-option active"
                                                : "sort-option"
                                        }
                                        onClick={() =>
                                            handleSortChange(
                                                option.value
                                            )
                                        }
                                    >

                                        <span>
                                            {
                                                option.label
                                            }
                                        </span>


                                        {sortBy ===
                                            option.value && (

                                            <span className="sort-check">
                                                ✓
                                            </span>

                                        )}

                                    </button>

                                )
                            )}

                        </div>

                    )}

                </div>

            </div>


            {/* =================================================
               # PRODUCTS
            ================================================= */}

            {filteredProducts.length > 0 ? (

                <div className="products-grid">

                    {filteredProducts.map(
                        (product) => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        )
                    )}

                </div>

            ) : (

                /* =================================================
                   # NO RESULTS
                ================================================= */

                <div className="no-products">

                    <div className="no-products-icon">

                        <Search size={30} />

                    </div>


                    <h2>
                        No products found
                    </h2>


                    <p>
                        Try searching for another product.
                    </p>


                    <button
                        type="button"
                        onClick={clearSearch}
                    >
                        Show all products
                    </button>

                </div>

            )}

        </main>

    );
}


export default Products;