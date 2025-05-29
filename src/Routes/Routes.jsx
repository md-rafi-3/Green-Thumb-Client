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
import UpdatedTips from "../Pages/UpdatedTips";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {index:true,
            element:<Home></Home>,
            hydrateFallbackElement:<Loading></Loading>
          },
            {
               path:"gardeners",
               element:<Gardeners></Gardeners>,
               loader:()=>fetch("https://green-thumb-server-delta.vercel.app/gardeners"),
               hydrateFallbackElement:<Loading></Loading>
            },
            {
              path:"browseTips",
              element:<BrowseTips></BrowseTips>,
              loader:()=>fetch("https://green-thumb-server-delta.vercel.app/tips"),
              hydrateFallbackElement:<Loading></Loading>
            },
            {
              path:"tipsDetails/:id",
              loader:({params})=>fetch(`https://green-thumb-server-delta.vercel.app/tips/${params.id}`),
              element:<PrivetRoute><TipsDetails></TipsDetails></PrivetRoute>,
              hydrateFallbackElement:<Loading></Loading>
            },
            {
              path:"updateTips/:id",
              element:<PrivetRoute><UpdatedTips></UpdatedTips></PrivetRoute>,
             loader:({params})=>fetch(`https://green-thumb-server-delta.vercel.app/tips/${params.id}`),
             hydrateFallbackElement:<Loading></Loading>
            },
            {
              path:"shareTips",
              element:<PrivetRoute><ShareTips></ShareTips></PrivetRoute>
            },
            {
              path:"myTips",
              element:<PrivetRoute><MyTips></MyTips></PrivetRoute>,
              loader:()=>fetch("https://green-thumb-server-delta.vercel.app/tips/privet"),
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