import ErrorPage from "@/components/ErrorPage/ErrorPage";
import Home from "@/components/Home/Home";
import AuthLayout from "@/components/Layout/AuthLayout";
import PrivateRoute from "@/components/Layout/PrivateRoute";
import Login from "@/components/Login/Login";
import NoteContent from "@/components/NoteContent/NoteContent";
import NoteList from "@/components/NoteList/NoteList";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <Login />,
				path: "/login"
			},
			{
				element: <PrivateRoute />,
				children: [
					{
						element: <Home />,
						path: "/",
						loader: () => {
							return 123
						},
						children: [
							{
								element: <NoteList />,
								path: "/folder/:folderId",

								children: [
									{
										element: <NoteContent />,
										path: "note/:noteId",
										loader: () => {
											return 123
										}
									}
								]
							}
						]
					}

				]
			}
		]
	}
])

export default router