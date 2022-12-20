import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [theUser, setTheUser] = useState(null);

	const getUserInfo = () => {
		axios
			.get("https://archdeco.onrender.com/auth/serializeuser", {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response)
				setTheUser(response.data);
				// console.log(theUser)
				// console.log(response)
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	const logout = () => {
		axios
			.post("https://archdeco.onrender.com/auth/logout", {}, { withCredentials: true })
			.then((response) => {
				console.log(response.data);
				if (response.data.message === "successfully logged out")
					setTheUser(null);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<UserContext.Provider
			value={{ theUser, setTheUser, logout, getUserInfo }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
