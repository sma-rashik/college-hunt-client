import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Main/Main.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import WrongPath from './components/WrongPath/WrongPath.jsx';
import Colleges from './components/Colleges/Colleges.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import CollegeDetails from './components/CollegeDetails/CollegeDetails.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import CollageCard from './components/HomePages/CollageCard.jsx';
import Admission from './components/Admission/Admission.jsx';
import MyCollage from './components/MyCollage/MyCollage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    errorElement: <WrongPath></WrongPath>,
    children: [
      {
        path: "/home", element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/allcollages`)
      },
      {
        path: "/", element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/allcollages`)
      },
      {
        path: "/colleges", element: <Colleges></Colleges>,
        loader: () => fetch(`http://localhost:5000/allcollages`)
      },
      {
        path: "/admission", element: <Admission></Admission>
      },
      {
        path: "/mycollage", element: <MyCollage></MyCollage>,
        loader: () => fetch(`http://localhost:5000/admissiondata`)
      },
      {
        path: "/register", element: <Register></Register>
      },
      {
        path: "/login", element: <Login></Login>
      },
      {
        path: "/allcollages/:id", element: <PrivateRoute> <CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/allcollages/${params.id}`)
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
