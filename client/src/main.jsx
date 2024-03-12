// import react library
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import style
import App from "./App.jsx";

// import pages file
import Dashboard from "./pages/Dashboard.jsx";
import TripPage from "./pages/TripPage.jsx";
import AddTrip from "./pages/AddTrip.jsx";
import Auth from "./pages/Auth.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import MyTrips from "./pages/MyTrips.jsx";
import Edit from "./pages/Edit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "trippage/:id",
        element: <TripPage />,
      },
      {
        path: "addtrip",
        element: <AddTrip />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "mytrips",
        element: <MyTrips />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
