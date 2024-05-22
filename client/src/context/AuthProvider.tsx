import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthContextType {
	user: object | undefined,
	setUser: (user: object) => void,

}

export const AuthContext = createContext<AuthContextType>({ user: {}, setUser: () => { } })

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const auth = getAuth()
	const [user, setUser] = useState<object>()
	const navigate = useNavigate()
	useEffect(() => {
		onAuthStateChanged(auth, async (userCred) => {
			if (userCred) {
				setUser(userCred)
				window.localStorage.setItem("token", await userCred.getIdToken())
			}
			else {
				setUser({})
				window.localStorage.removeItem("token")
				navigate("/login")
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth])
	return (
		<AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
	)

}

export default AuthProvider