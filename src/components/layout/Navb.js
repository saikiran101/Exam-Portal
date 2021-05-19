import React from "react";
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from "react-redux";
import {Navbar, Nav } from "react-bootstrap";
import test from "../images/test.png";


const Navb = (props) => {
	  const { auth,profile } = props;
	  // console.log(auth);
	  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

	return (
		<div >
					<Navbar
						style={{backgroundColor: "#757575" }} expand="lg"
					>
							<Navbar.Brand href="/" style={{ fontSize: "31px" }}>
								<img
									style={{ maxWeight: "40px", maxHeight: "40px" }}
									src={test}
									alt={test}
								/>
								<b style={{color:"white"}}>Exam portal</b>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="ml-auto font-weight-bold" >
									{links}
								</Nav>
							</Navbar.Collapse>
					</Navbar>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(Navb);
