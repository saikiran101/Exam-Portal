import React, { useState, useRef, useEffect} from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import quizData from "../db/db";
import firebase from '../../config/fbConfig';
import "./style.css";
let myAnswers = {};

const db =firebase.firestore();

const quiz = () => {
	// const [quizData,setQuizData]= useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [temp, settemp] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const { question, answer, options } = quizData[currentQuestion];
	const [totalMarks, setTotalMarks] = useState(0);
	const [isAnswerd, setisAnswerd] = useState("none");
	const [optionclass, setoptionclass] = useState("options");
	const [submited, setSubmited] = useState(false);
	const refs = useRef(currentQuestion);
	//   const refers = useRef(currentQuestion);

	useEffect(() => {
		
		db.collection('P-python').onSnapshot(snapshot=>{
			let data =snapshot.docs.map(doc=>doc.data()) 
			console.log(data)
			// setQuizData(snapshot.docs.map(doc=>doc.data()));
			console.log(data[0].options)
		})
	}, []);
	const previewsQ = () => {
		if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
		setSelectedAnswer("");
		setoptionclass("options");
	};
	const nextQ = () => {
		if (currentQuestion < quizData.length - 1)
			setCurrentQuestion(currentQuestion + 1);
		setSelectedAnswer("");
		setoptionclass("options");
	};
	const confirm = () => {
		if (selectedAnswer === answer) {
			setTotalMarks(totalMarks + 1);
			console.log(totalMarks);
		}
		if (currentQuestion === quizData.length - 1) {
			console.log("hello");
			console.log(currentQuestion);
			console.log(quizData.length - 1);
			setCurrentQuestion(0);
			//settemp(currentQuestion);
		}
		if (currentQuestion < quizData.length - 1)
			setCurrentQuestion(currentQuestion + 1);

		refs.current.childNodes[currentQuestion].style.backgroundColor = "green";
		myAnswers[currentQuestion] = selectedAnswer;
		settemp(currentQuestion + 1);
		setSelectedAnswer("");
		setisAnswerd("none");
		setoptionclass("options");
	};
	const setMyAnswer = (option) => {
		if (option.length > 0) {
			setisAnswerd("inline");
			setSelectedAnswer(option);
			setoptionclass("selected");
		} else {
			setisAnswerd(false);
			setSelectedAnswer(null);
			setoptionclass("options");
		}
	};
	const MarkQ = () => {
		
		if (currentQuestion < quizData.lenght - 1)
			setCurrentQuestion(currentQuestion + 1);
		refs.current.childNodes[currentQuestion].style.backgroundColor = "yellow";
		settemp(currentQuestion + 1);
		setSelectedAnswer("");
		setisAnswerd("none");
		setoptionclass("options");
	};
	// const {projects}= this.props;
	//      console.log(projects);
	//
	//useEffect(async () => {
	//	let _status = await localStorage.getItem("status");
	//	if (_status === "done") {
	//		setSubmited(true);
	//	}
	//}, []);
	//
	const Submit = () => {
		console.log(totalMarks);
		//localStorage.setItem("status", "done");
		//props.history.push('./result');
		setSubmited(true);
	};

	if (!submited) {
		console.log(temp);
		return (
			<Col md={12}>
				<Row>
					<Col
						md={8}
						sm={8}
						style={{ padding: "0 !important", display: "flex-end" }}
					>
						<Card className="d-block mx-auto" style={{ width: "100%" }}>
							{/* <CountDown
										seconds={1800}
										color="darkyellow"
										alpha={0.4}
										size={90}
									/> */}
							<Card.Body>
								<Card.Text>
									{currentQuestion + 1 + " out of " + quizData.length}
								</Card.Text>
								<Card.Title>{question}</Card.Title>

								{options.map((option, i) => (
									<Card.Text
										key={i}
										className={optionclass}
										name={"options"}
										onClick={(e) => setMyAnswer(option)}
									>
										{option}
									</Card.Text>
								))}
								<Row>
									<Col></Col>
									<Col xs={9}>
										<Button variant="primary" onClick={previewsQ}>
											{"< --Previous"}
										</Button>
										<Button
											variant="primary"
											style={{ display: isAnswerd }}
											onClick={confirm}
										>
											Confirm
										</Button>
										<Button variant="primary" onClick={nextQ}>
											{"Next-- >"}
										</Button>
										<Button variant="primary" onClick={MarkQ}>
											{"Re-Take"}
										</Button>
										<br />
										<Button variant="primary" onClick={Submit}>
											{"Submit"}
										</Button>
									</Col>
									<Col></Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={4}>
						<Card className="listOfNumbers" ref={refs}>
							{quizData.map((question) => (
								<button
									key={question.id + 1}
									onClick={(e) => setCurrentQuestion(question.id)}
									className="button"
								>
									{question.id + 1}
								</button>
							))}
						</Card>
					</Col>
				</Row>
			</Col>
		);
	} else {
		return (
			<div className="container">
				<div
					style={{
						display: "grid",
						justifyItems: "center",
						alignItems: "center",
						marginTop: "10%",
					}}
				>
					<Card style={{ width: "500px", padding: "10px" }}>
						<h3 style={{ textAlign: "center" }}>
							Thank you. <br /> you scored {totalMarks}
						</h3>
						<ul>
							<li>
								{" "}
								Your Score {totalMarks} out of {quizData.length}
							</li>
						</ul>
						<ul>
							<li>
								Correct: {totalMarks} & Incorrect:{" "}
								{quizData.length - totalMarks}
							</li>
						</ul>
						<ul>
							<li>Percentile: {(totalMarks / 20) * 100}</li>
						</ul>
					</Card>
				</div>
			</div>
		);
	}
};


// const mapStateToProps=(state=>{
// 	return{
// 		projects:state.firebase.ordered.projects
// 	}
// })
export default quiz;
// compose(
// 	connect(mapStateToProps),
// 	firebaseConnect([
// 		{collection:'quiz'}
//   ])
// ) 