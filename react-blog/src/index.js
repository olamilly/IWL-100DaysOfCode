import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./pages/About";
import Story from "./pages/Story";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainStory from "./pages/MainStory";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/about", element: <About /> },
	{ path: "/story", element: <Story /> },
	{ path: "/headline", element: <MainStory /> },
]);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
