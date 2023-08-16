import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GlobalStyles from './styles'
import RoutesProvider from './pages/routes'
import { store } from './store'

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
      </BrowserRouter>
    </Provider>
  )
}

export default App
