import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const Login = () => {
	const handleSigIn = (event: React.BaseSyntheticEvent) => {
		event.preventDefault()
		console.log(event.currentTarget.email.value)
		console.log(event.currentTarget.password.value)
	}
	return (
		<Card className="w-[350px] mx-auto">
			<CardHeader className="text-center">
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<form onSubmit={(e) => handleSigIn(e)}>
				<CardContent>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="Your email" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Password</Label>
							<Input id="password" placeholder="Your password" type="password"></Input>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex w-full flex-wrap gap-2 justify-center">
					<Button type="submit" className="w-full">Login</Button>
					<span className="flex justify-center font-semibold">or</span>
					<Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-100 hover:border hover:border-blue-400">Login with Google</Button>
				</CardFooter>
			</form>
		</Card >
	)
}

export default Login