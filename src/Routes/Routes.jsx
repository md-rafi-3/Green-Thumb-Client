import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from "../Layouts/mainLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {index:true,
            element:<Home></Home>
          },
            {
                
            }         
    ]
  },
]);