// import axios from "axios";
// import { useState } from "react";

// export default function SignupOrLogin({ action }) {
// 	const [formState, setFormState] = useState({
// 		username: "",
// 		password: "",
// 	});

// 	const { getUserInfo } = useContext(UserContext);

// 	const updateInput = (e, thingToUpdate) => {
// 		setFormState({ ...formState, [thingToUpdate]: e.target.value });
// 	};

// 	const submitSignupForm = () => {
// 		let endpoint;
// 		if (action === "signup") endpoint = "signup";
// 		if (action === "login") endpoint = "login";

// 		axios
// 			.post(
// 				"http://localhost:4200/" + endpoint,
// 				{
// 					username: formState.username,
// 					password: formState.password,
// 				},
// 				{ withCredentials: true }
// 			)
// 			.then((response) => {
// 				getUserInfo();
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};

// 	return (
// 		<div className={action}>
// 			{action === "signup" ? "Signup" : "Login"}
// 			<div>
// 				Username
// 				<input
// 					type="text"
// 					value={formState.username}
// 					onChange={(e) => {
// 						updateInput(e, "username");
// 					}}
// 				/>
// 			</div>
// 			<div>
// 				Password
// 				<input
// 					type="text"
// 					value={formState.password}
// 					onChange={(e) => {
// 						updateInput(e, "password");
// 					}}
// 				/>
// 			</div>
// 			<button onClick={submitSignupForm}>Submit</button>
// 		</div>
// 	);
// }