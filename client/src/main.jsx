// import react library
import ReactDOM from 'react-dom/client'
// import app component
import App from './App.jsx'
// import css file
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}/>)
