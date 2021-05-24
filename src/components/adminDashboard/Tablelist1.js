import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../config/fbConfig";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const db = firebase.firestore();
const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
const Tablelist1 = (props) => {
	//    const classes = useStyles();
	//const [open,setOpen]= useState(false);
	//const [input, setInput]=useState();

	//const updateTodo =()=>{

	//    db.collection('todos').doc(props.todo.id).set({
	//     todo: input
	//    },{merge: true});
	//    setOpen(false);
	//}

	return (
		<tr>
			<td colSpan="2">{props.quiz.question}</td>
			<td>{props.quiz.options}</td>
			<td>{props.quiz.answer}</td>
			<td>
				<EditIcon />
				<DeleteIcon
					style={{ marginLeft: "20px" }}
					onClick={(event) =>
						db.collection("Pjava").doc(props.quiz.id).delete()
					}
				/>
			</td>
		</tr>
	);
};

export default Tablelist1;
