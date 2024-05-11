import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Contacts from './components/Contacts.jsx'
import Services from './components/Services.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element:<App/>,
    children:[
      {
        path : '/',
        element:<Home/>
      },
      {
        path : '/contact',
        element:<Contacts/>
      },
      {
        path : '/services',
        element:<Services/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
