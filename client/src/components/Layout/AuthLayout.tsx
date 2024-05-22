import AuthProvider from '@/context/AuthProvider'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	return (
		<AuthProvider>
			<Outlet />
		</AuthProvider>
	)
}

export default AuthLayout