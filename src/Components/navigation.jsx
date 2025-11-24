import React from "react";
function navigation(){
    const categories = [
    "Woman's Fashion",
    "Men's Fashion", 
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
    ];
    return(<nav className="navigation">
        <ul>
            {categories.map((category,index)=>(<li key={index}>{category}</li>))}
        </ul>
    </nav>);
}
export default navigation;