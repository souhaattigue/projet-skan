import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 mt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Exclusive */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Exclusive</h3>
                    <p className="text-lg font-medium">Subscribe</p>
                    <p className="text-sm">Get 10% off your first order</p>
                    <div className="relative max-w-[220px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border border-white py-3 px-4 rounded w-full text-sm focus:outline-none"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Support */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Support</h3>
                    <p className="text-sm leading-6">
                        111 Bijoy sarani, Dhaka,<br />
                        DH 1515, Bangladesh.
                    </p>
                    <p className="text-sm">exclusive@gmail.com</p>
                    <p className="text-sm">+88015-88888-9999</p>
                </div>

                {/* Account */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Account</h3>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li><a href="#" className="hover:text-gray-300">My Account</a></li>
                        <li><a href="#" className="hover:text-gray-300">Login / Register</a></li>
                        <li><a href="#" className="hover:text-gray-300">Cart</a></li>
                        <li><a href="#" className="hover:text-gray-300">Wishlist</a></li>
                        <li><a href="#" className="hover:text-gray-300">Shop</a></li>
                    </ul>
                </div>

                {/* Quick Link */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Quick Link</h3>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-300">Terms Of Use</a></li>
                        <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>

                {/* Download App */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Download App</h3>
                    <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
                    <div className="flex gap-2">
                        <div className="w-20 h-20 bg-white p-1">
                            {/* QR Code Placeholder */}
                            <img src="https://placehold.co/80x80?text=QR" alt="QR Code" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src="https://placehold.co/100x30?text=GooglePlay" alt="Google Play" className="h-8 object-contain bg-black border border-white rounded" />
                            <img src="https://placehold.co/100x30?text=AppStore" alt="App Store" className="h-8 object-contain bg-black border border-white rounded" />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-2">
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
                &copy; Copyright Rimel 2022. All right reserved
            </div>
        </footer>
    );
};

export default Footer;
