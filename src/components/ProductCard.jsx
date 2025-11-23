import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const {
        id,
        name,
        price,
        originalPrice,
        discount,
        rating,
        reviews,
        image,
        isNew
    } = product;

    return (
        <div className="group relative flex flex-col gap-4 w-full max-w-[270px]">
            {/* Image Container */}
            <div className="relative w-full h-[250px] bg-[#F5F5F5] rounded flex items-center justify-center overflow-hidden">
                {/* Badges */}
                {discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded z-10">
                        -{discount}%
                    </div>
                )}
                {isNew && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded z-10">
                        NEW
                    </div>
                )}

                {/* Action Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>

                {/* Product Image Link */}
                <Link to={`/product/${id}`} className="w-full h-full flex items-center justify-center">
                    <img
                        src={image || "https://placehold.co/200x200?text=Product"}
                        alt={name}
                        className="w-full h-full object-contain p-4 mix-blend-multiply"
                    />
                </Link>

                {/* Add To Cart Overlay */}
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Add To Cart
                </button>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-1">
                <Link to={`/product/${id}`} className="font-medium text-base truncate hover:text-red-500 transition-colors">{name}</Link>
                <div className="flex gap-3 text-base font-medium">
                    <span className="text-red-500">${price}</span>
                    {originalPrice && (
                        <span className="text-gray-500 line-through">${originalPrice}</span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth={i < Math.floor(rating) ? 0 : 1.5}
                                className="w-4 h-4"
                            >
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-gray-500 text-sm">({reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
