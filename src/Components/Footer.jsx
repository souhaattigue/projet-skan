import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-bold text-lg">Skan</div>
          <p className="mt-2 text-sm">Your one-stop shop for modern electronics.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Support</h4>
          <ul className="mt-3 text-sm space-y-2">
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 text-sm space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm">© {new Date().getFullYear()} Skan — All rights reserved</div>
    </footer>
  )
}

export default Footer
