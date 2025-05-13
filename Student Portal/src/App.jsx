import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
// import Login from "./Pages/Login";
import DashBoard from "./Pages/Dashboard";
import NotFound from "./components/NotFound";
// import StudentList from "./components/StudentDetails";
import StudentDetails from "./components/StudentDetails";

const RootLayout = () => {
  // const data = {

  // };

  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { path: "/", element: <Form /> },
      { path: "/dashboard", element: <DashBoard />},
      { path: "/dashboard/view", element: <StudentDetails/>},
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
