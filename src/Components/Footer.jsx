import "./Footer.css"
function Footer(){
    return(
        <div className="footer" >
            <div className="footer-section">
                <h2>Exclusive</h2>
                <h3>Subscribe</h3>
                <p>Get 10% off your first order</p>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-section">
                <h1>Support</h1>
                <p>Ill Bijby sarani,Dhaka,</p>
                <p>DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="footer-section">
                <h3>Account</h3>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>

            <div className="footer-section">
                <h3>Quick Link</h3>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>

            <div className="footer-section">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <p>Google Play</p>
                <p>Download App Store</p>
            </div>

        </div>
    )
}
export default Footer;