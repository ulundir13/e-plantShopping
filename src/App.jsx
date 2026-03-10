
import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p className="tagline">Beautiful houseplants for every home.</p>
          <AboutUs />
          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;