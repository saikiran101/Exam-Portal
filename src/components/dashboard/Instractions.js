import React from 'react'
import { Button, Card} from 'react-bootstrap'
import Link from 'react-router-dom/Link';

const Instractions = () => {
    return (
        <div>
            
                <Card style={{ width: '60%', height: "20%", margin: "5% auto", boxShadow: "10px 10px #888888" }}>
                    <Card.Body>
                        <Card.Title className="pd-10px text-align center"><b>Instructions</b></Card.Title>
                        <Card.Text>
                            1.)Exam has Total 20 Questions
                        </Card.Text>
                        <Card.Text>
                            2.)TotalTime for Exam is 30mins
                        </Card.Text>
                        <Card.Text>
                            3.)There is NO Negative marking
                        </Card.Text>
                        <ol>
                            <li>Next: For next Question</li>
                            <li>Previews: For Previews Question</li>
                            <li>Review: Marks as Review so that u can that question later</li>
                        </ol>
                        <Link to="/test"> <Button className="px-5 mt-3" variant="primary" >Take Test</Button></Link>
                    </Card.Body>
                </Card>
           
        </div>
    );
}

export default Instractions
