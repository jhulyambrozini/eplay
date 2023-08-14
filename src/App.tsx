import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import GlobalStyles from './styles'
import ProductsList from './components/ProductsList/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="grey" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
