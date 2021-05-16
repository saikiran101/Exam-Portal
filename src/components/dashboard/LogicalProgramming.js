import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Card from "../layout/Card"

const LogicalProgramming = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card
                            title="Java"
                            text="Logical MCQ  on OOP's concepts"
                            visit="/"
                            bname="GET Test"
                        />
                    </Col>
                    <Col>
                        <Card
                            title="Python"
                            text="Logical MCQ on OOP's concepts"
                            visit="/"
                            bname="GET Test"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogicalProgramming
