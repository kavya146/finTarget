import "./App.css";
import Dashboard from "./components/content/Dashboard";
import Analytics from "./components/content/Analytics";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/mainContent/MainContent";
import Broker from "./components/content/Broker";
import Strategy from "./components/content/Strategy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/dashboard",
    element: <MainContent component={<Dashboard />} />,
  },
  {
    path: "/broker",
    element: <MainContent component={<Broker />} />,
  },
  {
    path: "/strategy",
    element: <MainContent component={<Strategy />} />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
