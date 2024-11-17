import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/question/Home";
import Login from "../pages/question/Login";
import Manages from "../pages/Manages";
import Register from "../pages/question/Register";
import Star from "../pages/manage/Star";
import Edit from "../pages/Edit";
import Stat from "../pages/Stat";
import NotFound from "../pages/question/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path:'/',
          element: <Home />,
        },
        {
          path:'/login',
          element: <Login />,
        },
        {
          path:'/register',
          element: <Register />,
        },
        {
          path:'manages',
          element: <ManageLayout />,
          children: [
            {
              path:'list',
              element: <List />,
            },
            {
              path:'star',
              element: <Star />,
            },
            {
              path:'trash',
              element:<Trash />
            }
          ]
        },
        {
          path:'edit',
          element:<Edit />,
        },
        {
          path:'stat',
          element:<Stat />,
        },
        {
          path:'*',
          element: <NotFound />,
        },
      ],
    },
    {
      path:'question',
      element:<QuestionLayout />,
      children:[
        {
          path:'edit/:id',
          element:<Edit />,
        },
        {
          path:'stat/:id',
          element:<Stat />,
        }
      ]
    }
]
)

export default router;
//常用的路由常量
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGES_PATHNAME = '/manages/list'