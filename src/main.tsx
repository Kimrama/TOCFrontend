import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import SongDetail from "./pages/songdetail";
import AllSong from "./pages/allSong";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/song/:id", element: <SongDetail /> },
  { path: "/allSong", element: <AllSong /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
// src/main.tsx
// ... โค้ด mount React ของคุณ
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((err) => console.error("SW register failed:", err));
  });
}
