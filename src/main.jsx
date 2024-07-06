import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import PagProjetos from "./routers/pagProjetos.jsx"
import Dashboard from "./routers/Dashboard.jsx"
import ProjectDetails from './routers/ProjectDetails.jsx'
import PagInical from './routers/PagInical.jsx'
import Info from './routers/Info.jsx'
import DashboardDados from "./routers/DashboardDados.jsx"

import Dev from "./routers/Dev.jsx"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { 
      'path': '/FEBRACE_frontend/projetos',
      'element': <PagProjetos/>
    }, { 
      'path': 'FEBRACE_frontend/dashboard', 
      "element": <Dev/>
    },
    {
      'path':'FEBRACE_frontend/projetos/details',
      'element': <ProjectDetails/>
    },
    {
      'path':'FEBRACE_frontend/',
      'element': <PagInical/>
    },
    {
      'path': 'FEBRACE_frontend/info',
      'element': <Info/>
    },
    {
      'path': 'FEBRACE_frontend/dashboardDados',
      'element': <Dev/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


