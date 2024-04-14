import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { ErrorPage } from './error'
import { OrderLoader } from './data/order'
import { AppPage } from './routes/app/root'
import { AuthPage } from './routes/auth/root'
import { OrderPage } from './routes/app/order'
import { SignInPage } from './routes/auth/signin'
import { SignUpPage } from './routes/auth/signup'
import { DashboardPage } from './routes/app/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ]
  },
  {
    path: '/',
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/order',
        element: <OrderPage />,
        loader: async () => await OrderLoader(),
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)