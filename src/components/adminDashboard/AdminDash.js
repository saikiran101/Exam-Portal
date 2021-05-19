import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

class AdminDash extends Component {
	state = {
		question: "",
		options: [],
		answer: "",
	};
	handleOptions = (e)=>{
		console.log(e.target.value);
		this.setState({
				options : e.target.value.split(",")
		})
		console.log(this.state.options)
		
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		console.log(this.state);
		e.preventDefault();	
		this.props.createProject(this.state);
	};

	render() {

		return (
			<Container>
			<h1 style={{textAlign:'center'}}>Admin Access</h1>
				<Row>
					<Col>
						<Form
							style={{ backgroundColor: "white", borderRadius: "20px",margin:"5%"}}
							onSubmit={this.handleSubmit}
						>
						<h1>ADD Questions</h1>
						       <Form.Group controlId="formGridState">
									<Form.Label>Course</Form.Label>
									<Form.Control as="select" defaultValue="Choose...">
									    <option>Choose Course</option>
										<option>LPMCQ Java</option>
										<option>LPMCQ Python</option>
										<option>PMCQ Java</option>
										<option>PMCQ Python</option>
									</Form.Control>
                                </Form.Group>
								<Form.Group controlId="formGridAddress1">
									<Form.Label>Questions</Form.Label>
									<Form.Control
										type="text"
										id="question"
										placeholder="Add questions.."
										onChange={this.handleChange}
									/>
								</Form.Group>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>options</Form.Label>
									<Form.Control
										type="text"
										id="options"
										placeholder="Enter option1, option2, option3, option4"
										onChange={this.handleOptions}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Group controlId="formGridPassword">
								<Form.Label>Answer</Form.Label>
								<Form.Control
									type="text"
									id="answer"
									placeholder="answer"
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project))
	}
}

export default connect(null, mapDispatchToProps)(AdminDash);

