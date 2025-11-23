import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(2);
    const [selectedColor, setSelectedColor] = useState('red');
    const [selectedSize, setSelectedSize] = useState('M');

    // Dummy product data (in a real app, fetch by ID)
    const product = {
        id: id,
        name: 'Havic HV G-92 Gamepad',
        price: 192.00,
        rating: 4.0,
        reviews: 150,
        inStock: true,
        description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        images: [
            'https://placehold.co/500x500/png?text=Gamepad+Main',
            'https://placehold.co/150x150/png?text=View+1',
            'https://placehold.co/150x150/png?text=View+2',
            'https://placehold.co/150x150/png?text=View+3',
            'https://placehold.co/150x150/png?text=View+4',
        ]
    };

    const relatedProducts = [
        {
            id: 7,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: 'https://placehold.co/200x200/png?text=Gamepad+Red',
        },
        {
            id: 8,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 4,
            reviews: 75,
            image: 'https://placehold.co/200x200/png?text=Keyboard',
        },
        {
            id: 6,
            name: 'IPS LCD Gaming Monitor',
            price: 370,
            originalPrice: 400,
            discount: 30,
            rating: 5,
            reviews: 99,
            image: 'https://placehold.co/200x200/png?text=Monitor',
        },
        {
            id: 2,
            name: 'RGB liquid CPU Cooler',
            price: 160,
            originalPrice: 170,
            rating: 4.5,
            reviews: 65,
            image: 'https://placehold.co/200x200/png?text=CPU+Cooler',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-500 mb-10">
                Account / Gaming / <span className="text-black font-medium">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
                {/* Gallery */}
                <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
                    <div className="flex md:flex-col gap-4">
                        {product.images.slice(1).map((img, index) => (
                            <div key={index} className="bg-[#F5F5F5] p-2 rounded cursor-pointer hover:border border-gray-300">
                                <img src={img} alt={`View ${index + 1}`} className="w-[120px] h-[100px] object-contain mix-blend-multiply" />
                            </div>
                        ))}
                    </div>
                    <div className="flex-grow bg-[#F5F5F5] rounded flex items-center justify-center p-10">
                        <img src={product.images[0]} alt={product.name} className="w-full max-w-[400px] object-contain mix-blend-multiply" />
                    </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <h1 className="text-2xl font-bold">{product.name}</h1>

                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth={i < Math.floor(product.rating) ? 0 : 1.5} className="w-4 h-4">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-500">({product.reviews} Reviews)</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-green-500">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>

                    <div className="text-2xl font-normal">${product.price.toFixed(2)}</div>

                    <p className="text-sm leading-6 border-b border-gray-300 pb-6">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-xl">Colours:</span>
                        <div className="flex gap-2">
                            <button
                                className={`w-5 h-5 rounded-full bg-[#A0BCE0] ${selectedColor === 'blue' ? 'ring-2 ring-black ring-offset-2' : ''}`}
                                onClick={() => setSelectedColor('blue')}
                            />
                            <button
                                className={`w-5 h-5 rounded-full bg-[#E07575] ${selectedColor === 'red' ? 'ring-2 ring-black ring-offset-2' : ''}`}
                                onClick={() => setSelectedColor('red')}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-xl">Size:</span>
                        <div className="flex gap-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    className={`w-8 h-8 rounded border text-sm font-medium transition-colors ${selectedSize === size ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 hover:border-red-500'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex border border-gray-300 rounded">
                            <button
                                className="px-3 py-2 hover:bg-red-500 hover:text-white transition-colors border-r border-gray-300"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </button>
                            <div className="px-6 py-2 font-medium w-12 text-center">{quantity}</div>
                            <button
                                className="px-3 py-2 hover:bg-red-500 hover:text-white transition-colors border-l border-gray-300"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>

                        <Button className="!px-10 !py-2.5">Buy Now</Button>

                        <button className="border border-gray-300 rounded p-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>
                    </div>

                    <div className="border border-gray-300 rounded mt-4">
                        <div className="flex items-center gap-4 p-4 border-b border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Free Delivery</h4>
                                <a href="#" className="text-xs underline">Enter your postal code for Delivery Availability</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Return Delivery</h4>
                                <p className="text-xs">Free 30 Days Delivery Returns. <a href="#" className="underline">Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Items */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-5 h-10 bg-red-500 rounded block"></span>
                    <h2 className="text-xl font-medium text-red-500">Related Item</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {relatedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
