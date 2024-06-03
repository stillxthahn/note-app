import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { getAuth, signOut } from 'firebase/auth'

const UserInfo = () => {
	const auth = getAuth()
	const handleLogOut = async () => {
		const res = await signOut(auth)
		console.log(res)
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='hover:border hover:border-gray-200'>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleLogOut}>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Logout</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserInfo