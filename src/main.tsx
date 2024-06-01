import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { ErrorPage } from './error'
import { ToastsComponent } from './components/toast'
import { ToastContextProvider } from './contexts/toast'
import { AuthPage, SignInPage, SignUpPage } from './routes/auth'
import { AppPage, DashboardPage, OrderPage } from './routes/app'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/signin?',
        element: <SignInPage />
      },
      {
        path: '/signup',
        element: <SignUpPage />
      }
    ]
  },
  {
    path: '/',
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/order',
        element: <OrderPage />
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
      <ToastsComponent />
    </ToastContextProvider>
  </React.StrictMode>
)