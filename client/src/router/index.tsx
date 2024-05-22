import Login from "@/components/Login";
import { Home } from "lucide-react";
import { Outlet, createBrowserRouter } from "react-router-dom";
const AuthLayout = () => {
	return (
		<>
			<button>Click me</button>
		</>
	)
}


export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{
				element: <Login />,
				path: "/login"
			},
			{
				element: <Home />,
				path: "/"
			}
		]
	}
])
