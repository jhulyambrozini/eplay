import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
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
    </BrowserRouter>
  )
}

export default App
