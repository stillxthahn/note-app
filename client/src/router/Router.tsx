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
						loader: async () => {
							const query = `query ExampleQuery {
  								folders {
									id
									name
									createAt
								}
							}`
							const res = await fetch("http://localhost:4000/graphql", {
								method: 'POST',
								headers: {
									"Content-Type": 'application/json',
									"Accept": 'application/json'
								},
								body: JSON.stringify({
									query
								})
							})
							const { data } = await res.json()
							console.log(data)
							return data
						},
						children: [
							{
								element: <NoteList />,
								path: "/folder/:folderId",
								loader: async ({ params: { folderId } }) => {
									const query = `query Folder($folderId: String) {
										folder(folderId: $folderId) {
											id
											name
										}
									}`
									const res = await fetch("http://localhost:4000/graphql", {
										method: 'POST',
										headers: {
											"Content-Type": "application/json",
											"Accept": "application/json"
										},
										body: JSON.stringify({
											query,
											variables: {
												folderId: folderId
											}
										})
									})
									const { data } = await res.json()
									console.log(data)
									return data
								},
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