import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserDashboard from './pages/UserDashboard';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import Controllers from './pages/Controllers';
import Report from './pages/Report';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/UserDashboard",
    element: <UserDashboard />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/Management",
    element: <Management />,
  },
  {
    path: "/Controllers",
    element: <Controllers />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
