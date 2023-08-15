import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GlobalStyles from './styles'
import RoutesProvider from './pages/routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <RoutesProvider />
      <Footer />
    </BrowserRouter>
  )
}

export default App
