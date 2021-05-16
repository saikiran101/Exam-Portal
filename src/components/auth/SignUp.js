import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {signUp} from '../../store/actions/authActions'
import { Button, Col, Form, Row } from 'react-bootstrap'
import imgs from "../images/2.jpg";
import './signup.css';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    img:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const { auth ,authError } = this.props;
    if (auth.uid) return <Redirect to='/signin'/> 
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col md={6} sm={6}>
            <div className="mt-5 my-5">
              <img className="img-fluid animated mx-auto d-block" src={imgs} alt='' style={{ width: "70%", borderRadius: "10%" }} />
            </div>
          </Col>
          <Col md={6} sm={6}>
            {/*<form className="d-block mx-auto white" style={{ width: "80%", borderRadius: "10%" }} onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3">Sign Up</h5>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              </div>
              <div>
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>*/}
            <Form className="style1" onSubmit={this.handleSubmit} >
              <h4 className="grey-text text-darken-3 pb-2">Sign Up</h4>
              <div style={{height:"320px"}}>
              <Form.Group controlId="formBasicEmail">
                
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id='email' onChange={this.handleChange} placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"id='password' onChange={this.handleChange} placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
                <Form.Control type="text" id='firstName' onChange={this.handleChange} placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" id='lastName' style={{transition: "box-shadow .3s, border .3s, -webkit-box-shadow .3s"}} onChange={this.handleChange} placeholder="Last Name" />
                </Form.Group>
                </div>
              <Button variant="danger" type="submit">Login</Button> 
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
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp:(newUser)=> dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)