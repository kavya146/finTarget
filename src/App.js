import "./App.css";
import Dashboard from "./components/content/Dashboard";
import Analytics from "./components/content/Analytics";
import SideNav from "./components/sideNav/SideNav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/mainContent/MainContent";

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
    path: "/analytics",
    element: <MainContent component={<Analytics />} />,
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
