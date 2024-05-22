import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.tsx'
import "../app/globals.css"
import "./firebase/config.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='container'>
    <RouterProvider router={router}></RouterProvider>
  </div>
)