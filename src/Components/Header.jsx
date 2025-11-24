import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <div className="text-xl font-extrabold text-black">Skan</div>
            <nav className="hidden md:flex gap-4 text-sm text-black">
              <a className="hover:text-red-600">Home</a>
              <a className="hover:text-red-600">Shop</a>
              <a className="hover:text-red-600">Collections</a>
            </nav>
          </div>

          <div className="flex-1 px-4 max-w-xl">
            <div className="relative">
              <input
                aria-label="Search"
                className="block w-full rounded-full border border-black py-2 pl-4 pr-10 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Search products, categories..."
              />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-opacity-60 text-sm">⌕</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
              <button className="text-sm text-black hover:text-red-600">Sign in</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">Cart</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
