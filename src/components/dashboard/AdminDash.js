import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

class AdminDash extends Component {
	state = {
		question: "",
		option1: "",
		option2: "",
		option3: "",
		option4: "",
		answer: "",
	};
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
				<Row>
					<Col>
						<Form
							style={{ backgroundColor: "white", borderRadius: "20px" }}
							onSubmit={this.handleSubmit}
						>
								<Form.Group controlId="formGridAddress1">
									<Form.Label>Questions</Form.Label>
									<Form.Control
										type="text"
										id="question"
										placeholder="add questions.."
										onChange={this.handleChange}
									/>
								</Form.Group>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>option1</Form.Label>
									<Form.Control
										type="text"
										id="option1"
										placeholder="Enter option1, option2, option3, option4"
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>option2</Form.Label>
									<Form.Control
										type="text"
										id="option2"
										placeholder="Enter option1, option2, option3, option4"
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>option3</Form.Label>
									<Form.Control
										type="text"
										id="option3"
										placeholder="Enter option1, option2, option3, option4"
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>option4</Form.Label>
									<Form.Control
										type="text"
										id="option4"
										placeholder="Enter option1, option2, option3, option4"
										onChange={this.handleChange}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Group as={Col} controlId="formGridPassword">
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
