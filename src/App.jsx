import Header from "./Components/Header"
import WelcomeMessage from "./Components/WelcomeMessage"
import HeroBanner from "./Components/HeroBanner"
import FlashSales from "./Components/FlashSales"
import CategoryBrowse from "./Components/CategoryBrowse"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <WelcomeMessage />
        <HeroBanner />
        <FlashSales />
        <CategoryBrowse />
      </main>
      <Footer />
    </div>
  )
}

export default App