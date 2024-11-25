import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import Login from "../login/Login";
import Register from '../login/Register';
import ProtectedRouter from '../router/ProtectedRouter';
import CarList from '../cars/CarList';
import CarDetail from '../cars/CarDetail';
import CarEdit from '../cars/CarEdit';
import CarDelete from '../cars/CarDelete';
import Close from '../login/Close';
import Logout from '../login/Logout';
import CarPublish from "../cars/CarPublish";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ProtectedRouter component={<CarList />} /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cars", element: <ProtectedRouter component={<CarList />} /> },
      { path: "car/:id", element: <ProtectedRouter component={<CarDetail />} /> },
      { path: "close", element: <ProtectedRouter component={<Close />} /> },
      { path: "/logout", element: <ProtectedRouter component={<Logout />} /> },
      { path: "/car/edit/:_id", element: <ProtectedRouter component={<CarEdit />} /> },
      { path: "/car/delete/:_id", element: <ProtectedRouter component={<CarDelete />} /> },
      { path: "/car/publish", element: <ProtectedRouter component={<CarPublish />} /> },
    ],
  },
]);

export default router;
