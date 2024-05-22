import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = () => {
	const navigate = useNavigate()
	if (!localStorage.getItem("token")) {
		navigate("/login")
		return;
	}
	return (
		<Outlet></Outlet>
	)
}

export default PrivateRoute