import { createBrowserRouter } from "react-router-dom";
// import Form from "../components/Form";
// import DashBoard from "../Pages/Dashboard";
import NotFound from "../components/NotFound";
import StudentDetails from "../components/StudentDetails";
import RootLayout from "../layout/RootLayout";
import { ROUTES } from "../const/Path";
import { lazy} from "react";

//lazy loading
const Form = lazy(() => import("../components/Form"));
// const StudentDetails = lazy(() =>import("../components/StudentDetails"))
const DashBoard=lazy(()=>import("../Pages/Dashboard"))
// const useSuspense

const router = createBrowserRouter([
  
  {
    path: ROUTES.ROOT,
    element: <RootLayout />,
    children: [
      { path: ROUTES.ROOT, element: <Form /> },
      { path: ROUTES.DASHBOARD, element: <DashBoard /> },
    // { path: ROUTES.STUDENT_DETAILS, lazy (() => import("../components/StudentDetails")) },

      { path: ROUTES.STUDENT_DETAILS, element: <StudentDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
