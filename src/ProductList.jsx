import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartCount } from './CartSlice';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 25,
    category: 'Air Purifying',
    image:
      'https://images.unsplash.com/photo-1593691509543-c55fb32a0f7b?auto=format&fit=crop&w=600&q=80',
    description: 'A hardy plant that helps purify indoor air.',
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 30,
    category: 'Air Purifying',
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    description: 'Elegant white blooms and strong air cleaning qualities.',
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 20,
    category: 'Air Purifying',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
    description: 'Easy to care for and excellent for beginners.',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 18,
    category: 'Medicinal',
    image:
      'https://images.unsplash.com/photo-1593482892290-f54927ae2b0d?auto=format&fit=crop&w=600&q=80',
    description: 'A soothing plant known for its healing gel.',
  },
  {
    id: 5,
    name: 'Mint',
    price: 15,
    category: 'Medicinal',
    image:
      'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=600&q=80',
    description: 'Fresh, useful, and wonderfully aromatic.',
  },
  {
    id: 6,
    name: 'Lavender',
    price: 22,
    category: 'Aromatic',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
    description: 'A calming fragrant plant perfect for indoor charm.',
  },
  {
    id: 7,
    name: 'Jasmine',
    price: 24,
    category: 'Aromatic',
    image:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=600&q=80',
    description: 'Sweetly scented blossoms that freshen any room.',
  },
  {
    id: 8,
    name: 'Rosemary',
    price: 19,
    category: 'Aromatic',
    image:
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80',
    description: 'A fragrant herb that looks beautiful indoors.',
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(selectCartCount);
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <header className="navbar">
        <div className="brand-link">
          <Link to="/" className="brand-link">
            <span className="logo">🌿</span>
            <div>
              <h2>Paradise Nursery</h2>
              <p>Bring nature home</p>
            </div>
          </Link>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart <span className="cart-count">{totalItems}</span>
          </Link>
        </nav>
      </header>

      <div className="product-page">
        <h1>Our Houseplants</h1>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isAdded = !!cartItems[plant.id];

                  return (
                    <div className="plant-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />
                      <h3>{plant.name}</h3>
                      <p className="price">${plant.price}</p>
                      <p>{plant.description}</p>
                      <button
                        onClick={() => dispatch(addToCart(plant))}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductList;