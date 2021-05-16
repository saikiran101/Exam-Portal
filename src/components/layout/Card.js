import React from 'react'
import { Button,Card } from 'react-bootstrap'
import Link from 'react-router-dom/Link'

const Cards = (props) => {
  
    return (
        <div>
            <Card style={{ width: '23rem', height: "13rem", margin: "15% auto", boxShadow: "10px 10px #888888" }}>
                <Card.Body>
                    <Card.Title className="pd-10px">{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Card.Text>
                        {props.text1}
                    </Card.Text>
                    <Card.Text>
                        {props.text2}
                    </Card.Text>
                    <Card.Text>
                        {props.text3}
                    </Card.Text>
                    <Card.Text>
                        {props.text4}
                    </Card.Text>   
                    <Link to={props.visit}> <Button className="px-5 mt-3" variant="primary" >{props.bname}</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards
