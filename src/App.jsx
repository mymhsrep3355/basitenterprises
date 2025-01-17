import { useState } from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing/Landing.jsx'
import ComingSoonPage from './pages/ComingSoon/index.jsx'


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <ComingSoonPage />,
  // },
  {
    path: "/",
    element: <Landing />,
  },
])
function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
