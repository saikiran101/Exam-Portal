import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Button, Nav, Navbar } from 'react-bootstrap'
import './log.css'
//import { Avatar } from '@material-ui/core'

const SignedInLinks = (props) => {
  return (
		//  <div className="right">
		//  <NavLink to=''>About Us</NavLink>
		//  <a onClick={props.signOut}>Log Out</a>
		//  <NavLink to="/" className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink>
		//    {/*<li><Avatar style={{display:'flex'}} src={props.img} /></li>*/}
		//</div>
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link
					href="./contactUs"
					className="color"
					style={{ color: "white" }}
				>
					Contact Us
				</Nav.Link>
				<Nav.Link
					onClick={props.signOut}
					className="color"
					style={{ color: "white" }}
				>
					Log Out
				</Nav.Link>
				<Button className="btn btn-danger" style={{ color: "white", backgroundColor:"pick" }}>
					{props.profile.initials}
				</Button>
			</Nav>
		</Navbar.Collapse>
	);
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
