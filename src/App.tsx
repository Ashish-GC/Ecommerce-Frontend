
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import { Toaster } from './components/ui/toaster'

function App() {

  return (
     <>
       <RouterProvider router={routes}/>
       <Toaster/>
     </>
     )
}

export default App
