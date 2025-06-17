import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Analytics />
    </>
  );
}

export default App;
