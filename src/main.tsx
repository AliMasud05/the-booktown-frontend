import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './routes/routes'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   
      <RouterProvider router={routes} />
  
  </React.StrictMode>
);
