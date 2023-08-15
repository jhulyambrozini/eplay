import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Categorys from './Categorys'

const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorys />} />
  </Routes>
)
export default RoutesProvider
