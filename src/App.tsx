import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header/Header'
import GlobalStyles from './styles'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
