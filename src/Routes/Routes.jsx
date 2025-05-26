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
import Loading from "../Components/Loading";
import TipsDetails from "../Pages/TipsDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {index:true,
            element:<Home></Home>
          },
            {
               path:"gardeners",
               element:<Gardeners></Gardeners>,
               loader:()=>fetch("http://localhost:3000/gardeners"),
               hydrateFallbackElement:<Loading></Loading>
            },
            {
              path:"browseTips",
              element:<BrowseTips></BrowseTips>,
              loader:()=>fetch("http://localhost:3000/tips"),
              hydrateFallbackElement:<Loading></Loading>
            },
            {
              path:"tipsDetails/:id",
              loader:({params})=>fetch(`http://localhost:3000/tips/${params.id}`),
              element:<PrivetRoute><TipsDetails></TipsDetails></PrivetRoute>
            },
            {
              path:"shareTips",
              element:<PrivetRoute><ShareTips></ShareTips></PrivetRoute>
            },
            {
              path:"myTips",
              element:<PrivetRoute><MyTips></MyTips></PrivetRoute>,
              loader:()=>fetch("http://localhost:3000/tips/privet"),
              hydrateFallbackElement:<Loading></Loading>
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