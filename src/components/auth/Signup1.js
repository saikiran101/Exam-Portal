import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import imgs from "../images/2.jpg";
import "./signup.css";

const SignUp = (props) => {
	const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });

	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	}

	const PostData = async (e) => {
		e.preventDefault();

		const { firstName, lastName, email, password } = user;

		const res = await fetch("/register", {
			method: "POST",
			header: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				firstName, lastName, email, password
			})
		});
		const data = await res.json();
		if (data.status === (422) || !data) {
			window.alert("invalid Registration");
			console.log("invalid Registration");
		} else {
			window.alert("Registration Successfull");
			console.log("Registration Successfull");

			props.history.push("/login");
		}
	};
	return (
		<div>
			<Row className="justify-content-md-center">
				<Col md={6} sm={6}>
					<div className="mt-5 my-5">
						<img
							className="img-fluid animated mx-auto d-block"
							src={imgs}
							alt=""
							style={{ width: "70%", borderRadius: "10%" }}
						/>
					</div>
				</Col>
				<Col md={6} sm={6}>
					<Form className="style1" method="POST">
						<h4 className="grey-text text-darken-3 pb-2">Sign Up</h4>
						<div style={{ height: "320px" }}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									id="firstName"
									name="firstName"
									value={user.firstName}
									onChange={handleInputs}
									placeholder="First Name"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									id="lastName"
									name="lastName"
									value={user.lastName}
									style={{
										transition:
											"box-shadow .3s, border .3s, -webkit-box-shadow .3s",
									}}
									onChange={handleInputs}
									placeholder="Last Name"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									id="email"
									name="email"
									value={user.email}
									onChange={handleInputs}
									placeholder="Enter email"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									id="password"
									name="password"
									value={user.password}
									onChange={handleInputs}
									placeholder="Password"
								/>
							</Form.Group>
						</div>
						<Button
							variant="danger"
							type="submit"
							name="signup"
							value="register"
							onClick={PostData}
						>
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</div>
	);
}



export default SignUp
