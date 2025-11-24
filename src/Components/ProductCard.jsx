import React from 'react'

const ProductCard = ({ title = 'Product', price = '99.00', rating = 4, badge }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col border border-black">
      <div className="relative">
        {badge && <span className="absolute left-2 top-2 bg-red-600 text-white text-xs px-2 py-1 rounded">{badge}</span>}
        <div className="w-full h-40 bg-white rounded-md flex items-center justify-center text-black">Image</div>
      </div>
      <div className="mt-3 flex-1">
        <h3 className="text-sm font-semibold text-black">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-black font-bold">${price}</div>
          <div className="text-sm text-red-600">{'★'.repeat(rating)}</div>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-black text-white text-sm py-2 rounded-md hover:bg-red-700">Add</button>
      </div>
    </div>
  )
}

export default ProductCard
