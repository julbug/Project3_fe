// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// const UserContext = createContext();

// // export const UserProvider = (props) => {
// // const { children } = props;
// export const UserProvider = ({ children }) => {
// 	const [theUser, setTheUser] = useState(null);

// 	const getUserInfo = () => {
// 		axios
// 			.get("http://localhost:4200/serializeuser", {
// 				withCredentials: true,
// 			})
// 			.then((response) => {
// 				setTheUser(response.data);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};

// 	useEffect(() => {
// 		getUserInfo();
// 	}, []);

// 	const logout = () => {
// 		axios
// 			.post("http://localhost:4200/logout", {}, { withCredentials: true })
// 			.then((response) => {
// 				console.log(response.data);
// 				if (response.data.message === "successfully logged out")
// 					setTheUser(null);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};

// 	return (
// 		// which states/functions we want as global variables. you have to pass the value in order for it to be available.
// 		<UserContext.Provider
// 			value={{ theUser, setTheUser, logout, getUserInfo }}
// 		>
// 			{children}
// 		</UserContext.Provider>
// 	);
// };

// export default UserContext;
