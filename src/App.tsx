import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GlobalStyles from './styles'
import RoutesProvider from './pages/routes'
import { store } from './store'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <div className="container">
          <Header />
        </div>
        <RoutesProvider />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
