import AuthProvider from '@/context/AuthProvider'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	return (
		<AuthProvider>
			<div className='mt-20'>
				<Outlet />
			</div>
		</AuthProvider>
	)
}

export default AuthLayout