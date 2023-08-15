import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Categories from './Categories'
import Product from './Product'

const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)
export default RoutesProvider
