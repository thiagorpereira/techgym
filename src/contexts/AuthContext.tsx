import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
}

type AuthContextProviderProps = {
	children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

	const [userTest, setUser] = useState({
		id: '3',
		name: 'Thiago!!',
		email: 'JesusIsTheLord@gmail.com',
		avatar: 'thiago.png'
	});


	return (
		<AuthContext.Provider value={{user: userTest}}>
			{children}
		</AuthContext.Provider>
	)
}