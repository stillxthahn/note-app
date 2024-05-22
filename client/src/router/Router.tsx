import Home from "@/components/Home/Home";
import AuthLayout from "@/components/Layout/AuthLayout";
import Login from "@/components/Login/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{
				element: <Home />,
				path: "/"
			},
			{
				element: <Login />,
				path: "/login"
			}
		]
	}
])

export default router