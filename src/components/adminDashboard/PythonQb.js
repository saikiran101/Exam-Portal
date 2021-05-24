import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import firebase from "../../config/fbConfig";
import PythonEditor from "./PythonEditor";
import Tablelist from "./Tablelist";
const db = firebase.firestore();

const PythonQb = () => {
	const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	useEffect(() => {
		//this code here fires then the app.js loads
		db.collection("P-python")
			.orderBy("timestamp", "asc")
			.onSnapshot((snapshot) => {
				console.log(snapshot.docs.map((doc) => doc.data()));
				setTodos(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						question: doc.data().question,
						options: doc.data().options,
						answer: doc.data().answer,
					}))
				);
			});
	}, []);
	return (
		<Card style={{ margin: "3%"}}>	
				<Button variant="primary" onClick={handleShow}>
					ADD Question
				</Button>
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Python</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<PythonEditor />
				</Modal.Body>
			</Modal>
			<Table striped bordered hover>
				<thead>
					<tr>
						{/*<th>S.No</th>*/}
						<th colSpan="2">Questions</th>
						<th>Options</th>
						<th>Answers</th>
						<th>Edit & Delete</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((quiz) => (
						<Tablelist quiz={quiz} text="P-python"/>
					))}
				</tbody>
			</Table>
		</Card>
	);
};

export default PythonQb;
