import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../config/fbConfig';
import DeleteIcon from '@material-ui/icons/Delete';
const db = firebase.firestore();
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
const Tablelist = (props) => {
        const classes = useStyles();
    const [open,setOpen]= useState(false);
    const [input, setInput]=useState();


    //const updateTodo =()=>{

    //    db.collection('todos').doc(props.todo.id).set({
    //     todo: input
    //    },{merge: true});
    //    setOpen(false);
    //}
    
    return (
        <div>
          <tbody>
            <tr>
                <td></td>
                    <td colSpan="2">{props.question.question}</td>
                <td>{props.question.options}</td>
                <td>{props.question.answer}</td>
                <td>"@twitter"</td>
            </tr>
        </tbody>

        </div>   
    );
}

export default Tablelist
