import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionHeader from './components/SectionHeader';
import ProductCard from './components/ProductCard';

function App() {
  const wishlistProducts = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.5,
      reviews: 65,
      image: 'https://placehold.co/200x200/png?text=Gucci+Bag',
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      rating: 4.5,
      reviews: 65,
      image: 'https://placehold.co/200x200/png?text=CPU+Cooler',
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      rating: 4.8,
      reviews: 55,
      image: 'https://placehold.co/200x200/png?text=Gamepad',
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      rating: 4.5,
      reviews: 55,
      image: 'https://placehold.co/200x200/png?text=Jacket',
    },
  ];

  const justForYouProducts = [
    {
      id: 5,
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 5,
      reviews: 65,
      image: 'https://placehold.co/200x200/png?text=Laptop',
    },
    {
      id: 6,
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      rating: 5,
      reviews: 65,
      image: 'https://placehold.co/200x200/png?text=Monitor',
      isNew: true, // Although not explicitly "New" badge in "Just For You" usually, but adding for variety or matching logic if needed
    },
    {
      id: 7,
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      rating: 5,
      reviews: 65,
      image: 'https://placehold.co/200x200/png?text=Gamepad+Red',
      isNew: true,
    },
    {
      id: 8,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      rating: 5,
      reviews: 65,
      image: 'https://placehold.co/200x200/png?text=Keyboard',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-10">

        {/* Wishlist Section */}
        <section className="mb-20">
          <SectionHeader
            title="Wishlist (4)"
            actionText="Move All To Bag"
            onAction={() => alert('Moved all to bag!')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {wishlistProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Just For You Section */}
        <section>
          <SectionHeader
            title={<div className="flex items-center gap-4"><span className="w-5 h-10 bg-red-500 rounded block"></span> <span className="text-xl">Just For You</span></div>}
            actionText="See All"
            onAction={() => alert('See all clicked')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {justForYouProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
