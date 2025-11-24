import React from 'react'
import ProductCard from './ProductCard'

const FlashSales = () => {
  const products = [
    { title: 'Game Controller', price: '29.99', rating: 5, badge: 'Sale' },
    { title: 'Wireless Earbuds', price: '49.99', rating: 4 },
    { title: 'Laptop Stand', price: '24.50', rating: 4 },
    { title: 'Modern Chair', price: '99.00', rating: 4, badge: 'New' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Flash Sales</h2>
        <div className="text-sm text-black text-opacity-70">Ends in 03:23:18</div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} price={p.price} rating={p.rating} badge={p.badge} />
        ))}
      </div>
    </section>
  )
}

export default FlashSales
