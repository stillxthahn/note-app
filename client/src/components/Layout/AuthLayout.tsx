import AuthProvider, { AuthContext } from '@/context/AuthProvider'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	const { user } = useContext(AuthContext)
	console.log("AUTHLAYOUT", user)
	return (
		<div className='mt-20'>
			<AuthProvider>
				<Outlet />
			</AuthProvider>
		</div>
	)
}

export default AuthLayout