import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'

import { ErrorPage } from './error'
import { OrderLoader } from './data/order'

import { AuthPage } from './routes/auth/root'
import { SignInPage } from './routes/auth/signin'
import { SignUpPage } from './routes/auth/signup'

import { AppPage } from './routes/app/root'
import { OrderPage } from './routes/app/order'
import { DashboardPage } from './routes/app/dashboard'

import { ToastContextProvider } from './contexts/toast'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard?',
        element: <DashboardPage />
      },
      {
        path: '/order',
        element: <OrderPage />,
        loader: async () => await OrderLoader()
      }
    ]
  },
  {
    path: '/',
    element: <AuthPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/signup',
        element: <SignUpPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ToastContextProvider>
  </React.StrictMode>
)