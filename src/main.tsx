import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";
import ContextProvider from './Context/ContextProvider.tsx';



const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>

)
