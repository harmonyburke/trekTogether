// import react library
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import app component
import App from './App.jsx'

// import pages file
import Dashboard from './pages/Dashboard.jsx';
import TripPage from './pages/TripPage.jsx';
import AddTrip from './pages/AddTrip.jsx';

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
      },
      {
        path: 'add-trip',
        element: <AddTrip />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}/>)
