import Card from '../layout/Card'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AdminDashBoard = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Card
                        title="Java"
                        text="MCQ on OPP's concepts"
                        visit="/JavaQb"
                        bname="Add QuestionBank"
                    />
                </Col>
                <Col md={6}>
                    <Card
                        title="Python"
                        text="MCQ on OPP's concepts"
                        visit="/Instractions"
                        bname="Add QuestionBank"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card
                        title="Java"
                        text="Logical MCQ  on OOP's concepts"
                        visit="/instractions"
                        bname="Add QuestionBank"
                    />
                </Col>
                <Col>
                    <Card
                        title="Python"
                        text="Logical MCQ on OOP's concepts"
                        visit="/instractions"
                        bname="Add QuestionBank"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminDashBoard
