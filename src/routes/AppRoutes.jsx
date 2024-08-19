import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Courses } from "../pages/Courses";
import { Anounsments } from "../pages/Anounsments";
import { Notifications } from "../pages/Notifications";
import { Schedule } from "../pages/Schedule";
import { Materils } from "../pages/innerPages/Materils";
import { Students } from "../pages/innerPages/Students";
import { Raitings } from "../pages/innerPages/Raitings";

export const ROUTES = {
  COURSES: "courses",
  ANOUNCEMENT: "anouncement",
  NOTIFICAIONS: "notifications",
  SCHEDULE: "schedule",
  MATERILS: "materials",
  STUDENTS: "students",
  RAITINGS: "raitings",
};

// eslint-disable-next-line react/prop-types
export const AppRoutes = ({ children }) => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to={ROUTES.COURSES} replace /> },
        {
          path: ROUTES.COURSES,
          element: <Courses />,
          children: [
            {
              index: true,
              element: <Navigate to={ROUTES.MATERILS} replace />,
            },
            { path: ROUTES.MATERILS, element: <Materils /> },
            { path: ROUTES.STUDENTS, element: <Students /> },
            { path: ROUTES.RAITINGS, element: <Raitings /> },
          ],
        },
        { path: ROUTES.ANOUNCEMENT, element: <Anounsments /> },
        { path: ROUTES.NOTIFICAIONS, element: <Notifications /> },
        { path: ROUTES.SCHEDULE, element: <Schedule /> },
      ],
    },
  ]);

  return <RouterProvider router={routes}>{children}</RouterProvider>;
};
