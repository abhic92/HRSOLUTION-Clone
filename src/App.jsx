
import Navbar from "./Components/navbar";
import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from "./Components/ContactPage.jsx";

const App = () => {

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <AboutUs />
              <div className="mt-8 p-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  
                </div>
              </div>
            </>
          }/>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;