import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from '../layout/Card'

const ProgrammingMCQ = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <Card
                            title="Java"
                            text="MCQ on OPP's concepts"
                            visit="/instractions"
                            bname="GET Test"
                        />
                    </Col>
                    <Col md={6}>
                        <Card
                            title="Python"
                            text="MCQ on OPP's concepts"
                            visit="/Instractions"
                            bname="GET Test"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProgrammingMCQ
