import { Outlet } from "react-router-dom"
import FolderNote from "../FolderNote/FolderNote"
import UserInfo from "../UserInfo/UserInfo"


const Home = () => {
	return (
		<div className="">
			<p className="text-center">Note App</p>
			<div className="flex justify-end mb-8">
				<UserInfo></UserInfo>
			</div>
			<div className="flex">
				<div className="basis-1/3">
					<FolderNote></FolderNote>
				</div>
				<div className="basis-2/3">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Home