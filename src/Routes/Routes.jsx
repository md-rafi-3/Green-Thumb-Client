import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from "../Layouts/mainLayout";
import Home from "../Pages/Home";
import Gardeners from "../Pages/Gardeners";
import BrowseTips from "../Pages/BrowseTips";
import ShareTips from "../Pages/ShareTips";
import MyTips from "../Pages/MyTips";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {index:true,
            element:<Home></Home>
          },
            {
               path:"gardeners",
               element:<Gardeners></Gardeners>,
               loader:()=>fetch("http://localhost:3000/gardeners")
            },
            {
              path:"browseTips",
              element:<BrowseTips></BrowseTips>
            },
            {
              path:"shareTips",
              element:<ShareTips></ShareTips>
            },
            {
              path:"myTips",
              element:<MyTips></MyTips>
            },
            {
              path:"login",
              element:<Login></Login>
            },
            {
              path:"signUp",
              element:<SignUp></SignUp>
            }     
    ]
  },
]);