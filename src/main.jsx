import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Componentes/Layout'
import './index.css'

import Index, {loader as clientesLoader, loader} from './Pages/Index'
import NuevoCliente from './Pages/NuevoCliente'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>
      }
    ]
  },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
