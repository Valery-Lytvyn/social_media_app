import { createHashRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import {
  FriendsPage,
  HomePage,
  Layout,
  ProfilePage,
  SettingsPage,
} from "../pages";
import MailPage from "../pages/MailPage";
import NotificationPage from "../pages/NotificationPage";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.friends,
        element: <FriendsPage />,
      },
      {
        path: ROUTES.profile,
        element: <ProfilePage />,
      },
      {
        path: ROUTES.settings,
        element: <SettingsPage />,
      },
      {
        path: ROUTES.mail,
        element: <MailPage />,
      },
      {
        path: ROUTES.notification,
        element: <NotificationPage />,
      },
    ],
  },
]);
