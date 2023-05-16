import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Componentes/Layout'
import ErrorPage from './Componentes/ErrorPage'
import './index.css'

import NuevoCliente, { action, action as nuevoClienteAction } from './Pages/NuevoCliente'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './Pages/EditarCliente'
import Index, { loader as clientesLoader, loader } from './Pages/Index'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/editar', //In this case :clienteId is the params
        element: <EditarCliente />, 
        loader: editarClienteLoader, 
        action: editarClienteAction, 
        errorElement: <ErrorPage/>
      }
    ]
  },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)