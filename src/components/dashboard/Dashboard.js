 import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Col, Container, Row } from 'react-bootstrap';
import Card from "../layout/Card"



class Dashboard extends Component {
  render() {
    const {auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <Container>
        <h5 style={{ textAlign: 'center' }}>hello {this.props.profile.firstName} {this.props.profile.lastName}</h5>
          <Row>
            <Col md={6}>           
              <Card
                title="Logical Programming"
                text="Logical programming questions based on java and python."
                visit="/LogicalProgramming"
                bname="GET"
                style={{width:"200px"}}
              />
            </Col>
            <Col md={6}>
              <Card
                title="Programming MCQ"
                text="Programming MCQ questions based on java and python."
                visit="/ProgrammingMCQ"
                bname="GET"
              />
            </Col>
          </Row>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default  connect(mapStateToProps)(Dashboard)
