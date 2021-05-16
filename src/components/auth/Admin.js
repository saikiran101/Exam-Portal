import React, { Component } from "react";
import { connect } from "react-redux";
import { Admin } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import imgs from "../images/2.jpg";
import "./signup.css";

class Admin1 extends Component {
	state = {
		email: "",
		password: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		console.log(this.state);
		e.preventDefault();
		this.props.Admin(this.state);
	};
	render() {
		const { authError, auth } = this.props;
		if (auth.uid) return <Redirect to="/AdminDash" />;
		console.log(auth);
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
						<Form className="style1" onSubmit={this.handleSubmit}>
							<h4 className="grey-text text-darken-3 pb-2">Admin Login</h4>
							<div style={{ height: "180px" }}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										id="email"
										onChange={this.handleChange}
										placeholder="Enter email"
									/>
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										id="password"
										onChange={this.handleChange}
										placeholder="Password"
									/>
								</Form.Group>
							</div>
							<Button variant="danger" type="submit">
								Login
							</Button>
							<div className="center red-text">
								{authError ? <p>{authError}</p> : null}
							</div>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		Admin: (creds) => dispatch(Admin(creds)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin1);
