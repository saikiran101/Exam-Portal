import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import firebase from "../../config/fbConfig";
import Tablelist1 from "./Tablelist";
const db = firebase.firestore();

const JavaQb = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		//this code here fires then the app.js loads
		db.collection("P-java")
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
		<Container>
			<Modal></Modal>
			<Card>
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
							<Tablelist1 quiz={quiz} />
						))}
					</tbody>
				</Table>
			</Card>
		</Container>
	);
};

export default JavaQb;
