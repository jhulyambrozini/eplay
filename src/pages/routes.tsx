import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Categories from './Categories'
import Product from './Product'
import Checkout from './Checkout'

const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)
export default RoutesProvider
