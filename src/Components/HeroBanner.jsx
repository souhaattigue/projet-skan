import React from 'react'

const HeroBanner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 bg-gradient-to-r from-black to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-extrabold">Up to 10% off Voucher</h2>
            <p className="mt-2 text-lg opacity-90">Shop top gadgets and accessories at limited time prices.</p>
            <div className="mt-6">
              <a className="inline-block bg-white text-red-600 px-4 py-2 rounded-md font-semibold shadow">Shop now</a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center border border-black">
            <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center text-black">Image</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
