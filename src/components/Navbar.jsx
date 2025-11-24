import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="border-b border-gray-200">
            {/* Top Banner */}
            <div className="bg-black text-white text-center py-3 text-sm flex justify-center items-center gap-2">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="#" className="font-bold underline">ShopNow</a>
                <div className="absolute right-10 flex items-center gap-1 cursor-pointer">
                    <span>English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-wider">Exclusive</Link>

                <nav className="hidden md:flex gap-12 text-base">
                    <Link to="/" className="hover:underline underline-offset-4 decoration-2">Home</Link>
                    <a href="#" className="hover:underline underline-offset-4 decoration-2">Contact</a>
                    <a href="#" className="hover:underline underline-offset-4 decoration-2">About</a>
                    <a href="#" className="hover:underline underline-offset-4 decoration-2">Sign Up</a>
                </nav>

                <div className="flex items-center gap-6">
                    {/* Search */}
                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-[#F5F5F5] py-2 px-4 pr-10 rounded text-sm w-[240px] focus:outline-none"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        <Link to="/wishlist" className="hover:text-red-500 transition-colors relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">4</span>
                        </Link>
                        <button className="hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                        <button className="hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
