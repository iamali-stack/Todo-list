import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Notfound from "./Components/Notfound";
const router=createBrowserRouter([
  
    {path:"/",element:<Home/>},
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"*",element:<Notfound/>},
  
])


export default function App() {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  );
}
