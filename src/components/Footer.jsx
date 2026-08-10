import { Mail, Phone } from "lucide-react";

function Footer() {
    return (
        <footer className="footer">

            {/* =================================================
               FOOTER MAIN CONTENT
            ================================================= */}

            <div className="footer-container">

                {/* BRAND */}

                <div className="footer-brand">

                    <h2>Apart</h2>

                    <p>
                        A modern collection designed around
                        simplicity, individuality and
                        beautiful experiences.
                    </p>

                </div>


                {/* CONTACT */}

                <div className="footer-column">

                    <h3>Contact</h3>

                    <a href="tel:+919999999999">
                        <Phone size={15} />
                        +91 99999 99999
                    </a>

                    <a href="mailto:abc@gmail.com">
                        <Mail size={15} />
                        abc@gmail.com
                    </a>

                </div>


                {/* COMPANY */}

                <div className="footer-column">

                    <h3>Apart</h3>

                    <a href="/">
                        Home
                    </a>

                    <a href="/products">
                        Products
                    </a>

                </div>

            </div>


            {/* =================================================
               FOOTER BOTTOM
            ================================================= */}

            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Apart.
                    All rights reserved.
                </p>

                <p className="made-in-india">
                    Made with <span>❤️</span> in India
                </p>

            </div>

        </footer>
    );
}

export default Footer;