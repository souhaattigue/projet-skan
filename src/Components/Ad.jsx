import "./Ad.css"

function Ad() {
    return (
        <div className="ad-banner">
            {/* Main promotional text */}
            <p className="ad-text">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="#" className="shop-link">ShopNow</a>
            </p>

            {/* Language selector on the right */}
            <div className="language-selector">
                <span>English</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </div>
    )
}

export default Ad;