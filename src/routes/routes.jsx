import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import CollegesDetails from "../pages/Home/CollegeCard/CollegesDetails/CollegesDetails";
import Register from "../pages/Singup/Register";
import Login from "../pages/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: '/college/:id',
        element: <CollegesDetails></CollegesDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_apiUrl}/college/${params.id}`)

      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/college/:id",
        element: <CollegesDetails></CollegesDetails>
      }
    ],
  },
  {
    path: '/singup',
    element: <Register></Register>
  },
  {
    path:"/login",
    element: <Login></Login>

  }
]);
