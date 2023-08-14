import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import GlobalStyles from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
