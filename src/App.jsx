import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Ad from "./Components/Ad"
import ProfilePage from "./Components/ProfilePage"
import NotFound from "./Components/NotFound"

function App() {
  return (
    <BrowserRouter>
      {/* Components that appear on all pages */}
      <Ad />
      <Header />

      {/* Routes - Different pages based on URL */}
      <Routes>
        {/* Home page - ProfilePage */}
        <Route path="/" element={<ProfilePage />} />

        {/* 404 Not Found - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;