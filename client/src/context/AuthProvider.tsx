import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";

export interface AuthContextType {
	user: User | undefined,
	setUser: (user: User) => void
}
export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const auth = getAuth()
	const [user, setUser] = useState<User>()
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user)
		}
	})
	return (
		<AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
	)

}

export default AuthProvider