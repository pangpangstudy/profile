import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={router} />);
