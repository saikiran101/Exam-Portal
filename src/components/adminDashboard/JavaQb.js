import { Card } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { Container, Table } from 'react-bootstrap';
import firebase from '../../config/fbConfig';
import Tablelist from './Tablelist';
const db = firebase.firestore();

const JavaQb = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //this code here fires then the app.js loads
    db.collection('P-python').orderBy('timestamp','asc').onSnapshot(snapshot=> {
      console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc =>({id:doc.id,question:doc.data()})))
    })
  }, []);
    return (
        <Container>
            <Card>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th colSpan="2">Questions</th>
                        <th >Options</th>
                        <th>Answers</th>
                        <th>Edit & Delete</th>
                    </tr>
                    </thead>
                    {/*{todos.map((question) => (
                        <Tablelist question={question} />
                    ))}*/}
                    
                </Table>
                </Card>
        </Container>
    );
}

export default JavaQb
