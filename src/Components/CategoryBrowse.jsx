import React from 'react'

const categories = [
  { id: 1, label: 'Audio' },
  { id: 2, label: 'Laptop' },
  { id: 3, label: 'Camera' },
  { id: 4, label: 'Furniture' },
  { id: 5, label: 'Accessories' },
]

const CategoryBrowse = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h3 className="text-lg font-semibold mb-4 text-black">Browse By Category</h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {categories.map((c) => (
          <button key={c.id} className="bg-white rounded-lg shadow px-4 py-6 flex flex-col items-center text-sm text-black border border-black hover:bg-black hover:text-white transition">
            <div className="w-10 h-10 mb-2 bg-white rounded border border-black flex items-center justify-center">🔲</div>
            <div>{c.label}</div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoryBrowse
