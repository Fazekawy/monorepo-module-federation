import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router";
import { router } from "./router/router";

const root = document.getElementById('root');

if(!root) throw new Error("Root not found");

createRoot(root).render(<RouterProvider router={router} />)