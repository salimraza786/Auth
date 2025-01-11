import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "@/pages/Signup"
import Login from "@/pages/login"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <Home/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])
  
  return (
    <>
      <div className="bg-gray-950 min-h-screen">
         <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
