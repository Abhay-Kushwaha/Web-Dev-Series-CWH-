import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from "../Components/Navbar.jsx"
import { Ghar } from "../Components/home"
import About from "../Components/About.jsx"
import Contact from "../Components/contact"
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Ghar /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    }
  ])

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
