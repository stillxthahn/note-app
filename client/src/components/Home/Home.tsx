import { Outlet, useLoaderData } from "react-router-dom"
import FolderNote from "../FolderNote/FolderNote"
import UserInfo from "../UserInfo/UserInfo"

export interface IFolder {
	id: string,
	name: string,
	createAt: string,
	author: {
		id: string,
		name: string
	}
}

const Home = () => {
	const data = useLoaderData() as { folders: Array<IFolder> }
	console.log("HOMEPAGE", (data.folders))
	return (
		<div className="">
			<p className="text-center">Note App</p>
			<div className="flex justify-end mb-8">
				<UserInfo></UserInfo>
			</div>
			<div className="flex">
				<div className="basis-1/3">
					<FolderNote folders={data.folders}></FolderNote>
				</div>
				<div className="basis-2/3">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Home