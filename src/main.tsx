import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'

import { ErrorPage } from './error'
import { OrderLoader } from './data/order'
import { NotifyProvider } from './context/notify'

import { AuthPage } from './routes/auth/root'
import { SignInPage } from './routes/auth/signin'
import { SignUpPage } from './routes/auth/signup'

import { AppPage } from './routes/app/root'
import { OrderPage } from './routes/app/order'
import { DashboardPage } from './routes/app/dashboard'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signin?',
        element: <SignInPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      }
    ]
  },
  {
    path: '/app',
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/app/dashboard?',
        element: <DashboardPage />
      },
      {
        path: '/app/order',
        element: <OrderPage />,
        loader: async () => await OrderLoader()
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NotifyProvider>
        <RouterProvider router={router} />
      </NotifyProvider>
    </QueryClientProvider>
  </React.StrictMode>
)