//import React, { useState, useRef}from 'react'
//import { Button, Card, Row, Col} from 'react-bootstrap';
//import quizData from '../db/db'
//import './style.css'
//import CountDown from "react-countdown-clock";

//let myAnswers = {};

//const quiz1 = (props) => {
//	const [currentQuestion, setCurrentQuestion] = useState(0);
//	const [temp, settemp] = useState(0);
//	const [selectedAnswer, setSelectedAnswer] = useState(null);
//	const { question, answer, options } = quizData[currentQuestion];
//	const [totalMarks, setTotalMarks] = useState(0);
//	const [isAnswerd, setisAnswerd] = useState("none");
//	const [optionclass, setoptionclass] = useState("options");
   
//	const refs = useRef(currentQuestion);
//	//   const refers = useRef(currentQuestion);

//	const previewsQ = () => {
//		if (currentQuestion > 0)
//			setCurrentQuestion(currentQuestion - 1);
//		setSelectedAnswer("");
//		setoptionclass('options');
//	}
//	const nextQ = () => {
//		if (currentQuestion < quizData.length - 1)
//			setCurrentQuestion(currentQuestion + 1);
//		setSelectedAnswer("");
//		settemp(currentQuestion + 1);
//		setoptionclass("options");
//	}
//	const confirm = () => {
//		console.log(quizData.length);
//		if (currentQuestion < quizData.length - 1)
//			setCurrentQuestion(currentQuestion + 1);
//		if (currentQuestion === quizData.length - 1) {
//			console.log("hello");
//			console.log(currentQuestion);
//			console.log(quizData.length - 1);
//			setCurrentQuestion(0);
//			//settemp(currentQuestion);
//		}
        
//		refs.current.childNodes[currentQuestion].style.backgroundColor = "green";
//		myAnswers[currentQuestion] = selectedAnswer;
//		settemp(currentQuestion + 1);
//		setSelectedAnswer("");
//		setisAnswerd("none");
//		setoptionclass("options");
//	}
//	const setMyAnswer = (option) => {
//		if (selectedAnswer === answer) {
//			setTotalMarks(totalMarks + 1);
//			console.log(totalMarks);
//			refs.current.childNodes[currentQuestion].style.backgroundColor = "green";
//			myAnswers[currentQuestion] = selectedAnswer;
//		}
//		if (option.length > 0) {
//			//setBtnColor(btnColor);
//			setisAnswerd("inline");
//			setSelectedAnswer(option);
//			setoptionclass("selected");
//		} else {
//			setisAnswerd(false);
//			setSelectedAnswer(null);
//			setoptionclass("options");
//		}
//	};
//	const MarkQ = () => {
//		if (currentQuestion < quizData.lenght - 1)
//			setCurrentQuestion(currentQuestion + 1);
//		refs.current.childNodes[currentQuestion].style.backgroundColor = "yellow";
//		settemp(currentQuestion + 1);
//		setSelectedAnswer("");
//		setisAnswerd('none');
//		setoptionclass("options");
//	}
//	const Submit = () => {
//		props.history.push('/result');
//	};
//	return (
//		<Row>
//			<Col
//				md={8}
//				sm={8}
//				style={{ padding: "0 !important", display: "flex-end" }}
//			>
//				<Card className="d-block mx-auto" style={{ width: "100%" }}>
//					<CountDown
//						seconds={1800}
//						color="darkyellow"
//						alpha={0.4}
//						size={90}
//					/>
//					<Card.Body>
//						<Card.Text>
//							{currentQuestion + 1 + " out of " + quizData.length}
//						</Card.Text>
//						<Card.Title>{question}</Card.Title>

//						{options.map((option, i) => (
//							<Card.Text
//								key={i}
//								className={"options"}
//								onClick={(e) => setMyAnswer(option)}
//							>
//								{option}
//							</Card.Text>
//						))}
//						<Button variant="primary" onClick={previewsQ}>
//							{"< --Previous"}
//						</Button>
//						<Button
//							variant="primary"
//							style={{ display: isAnswerd }}
//							onClick={confirm}
//						>
//							Confirm
//									</Button>
//						<Button variant="primary" onClick={nextQ}>
//							{"Next-- >"}
//						</Button>
//						<Button variant="primary" onClick={MarkQ}>
//							{"Re-Take"}
//						</Button>
//						<br />

									
//						<Button variant="primary" onClick={Submit}>{"Submit"}</Button>
									
//					</Card.Body>
//				</Card>
//			</Col>
//			<Col md={4} sm={4}>
//				<Card className="listOfNumbers" ref={refs}>
//					{quizData.map((question) => (
//						<button
//							key={question.id + 1}
//							onClick={(e) => setCurrentQuestion(question.id)}
//							className="button"
//						>
//							{question.id + 1}
//						</button>
//					))}
//				</Card>
//			</Col>
//		</Row>
//	);
//}
//export default quiz1;