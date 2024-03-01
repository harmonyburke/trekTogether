// import react library
import ReactDOM from 'react-dom/client'
// import app component
import App from './App.jsx'
// import css file
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import TripPage from './components/TripPage.jsx';

// import components

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'trip-page',
        element: <TripPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}/>)
