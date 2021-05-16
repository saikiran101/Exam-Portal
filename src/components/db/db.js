const quizData = [
  {
    id: 0,
    question: `  What is the maximum possible length of an identifier?`,
    options: [
      `A)  16`,
      `B)  32`,
      `C)  64`,
      `D)  None of these above`,
    ],
    answer: `D)  None of these above`,
  },
  {
    id: 1,
    question: `Who developed the Python language`,
    options: [
      `A)  Zim Den`,
      `B)  Guido van Rossum`,
      `C)  Niene Stom`,
      `D)  Wick van Rossum`,
    ],
    answer: `B)  Guido van Rossum`,
    explanation:
      "Python language was developed by Guido van Rossum in the Netherlands.",
  },
  {
    id: 2,
    question: `In which year was the Python language developed`,
    options: [
      `A)  1995`,
      `B)  1972`,
      `C)  1981`,
      `D)  1989`,
    ],
    answer: `D)  1989`,
  },
  {
    id: 3,
    question: `In which language is Python written`,
    options: [
      `A)  English`,
      `B)  PHP`,
      `C)  C`,
      `D) All of the above`,
    ],
    answer: `C) C`,
  },
  {
    id: 4,
    question: `Which one of the following is the correct extension of the Python file`,
    options: [
      `A)  .py`,
      `B)  .python`,
      `C)  .p`,
      `D)  None of these`,
    ],
    answer: `A) .py`,
  },
  {
    id: 5,
    question: `In which year was the Python 3.0 version developed?`,
    options: [
      `A)  2008`,
      `B)  2000`,
      `C)  2010`,
      `D)  2005`,
    ],
    answer: `A)  2008`,
  },
  {
    id: 6,
    question: `What do we use to define a block of code in Python language?`,
    options: [
      `A)  Key`,
      `B)  Brackets`,
      `C)  Indentations`,
      `D)  None of these`,
    ],
    answer: `C)  Indentation`,
  },
  {
    id: 7,
    question: `Which character is used in Python to make a single line comment?`,
    options: [
      `A)  /`,
      `B)  //`,
      `C)  #`,
      `D)  !`,
    ],
    answer: `C)   #`,
  },
  {
    id: 8,
    question: ` Which of the following statements is correct regarding the object-oriented programming concept in Python?`,
    options: [
      `A)  Classes are real-world entities while objects are not real`,
      `B)  Objects are real-world entities while classes are not real`,
      `C)  Both objects and classes are real-world entities`,
      `D)  All of the above`,
    ],
    answer: `B) Objects are real-world entities while classes are not real`,
  },
  {
    id: 9,
    question: `What is the method inside the class in python language?`,
    options: [
      `A)  Object`,
      `B)  Function`,
      `C)  Attribute`,
      `D)  Argument`,
    ],
    answer: `B)  Function`,
  },
  {
    id: 10,
    question: ` Which of the following declarations is incorrect?`,
    options: [
      `A)  _x = 2`,
      `B) __x = 3`,
      `C)  __xyz__ = 5`,
      `D) None of these`,
    ],
    answer: `C)   None of these`,
  },
  {
    id: 11,
    question: ` Why does the name of local variables start with an underscore discouraged?`,
    options: [
      `A)  To identify the variable`,
      `B)  It confuses the interpreter`,
      `C)  It indicates a private variable of a class`,
      `D)  None of these`,
    ],
    answer: `C) It indicates a private variable of a class`,
  },
  {
    id: 12,
    question: `Which of the following is not a keyword in Python language?`,
    options: [
      `A)  val`,
      `B)  raise`,
      `C)  try`,
      `D)  with`,
    ],
    answer: `A)  val`,
  },
  {
    id: 13,
    question: `Which of the following statements is correct for variable names in Python language?`,
    options: [
      `A)  All variable names must begin with an underscore.`,
      `B) Unlimited length`,
      `C)  The variable name length is a maximum of 2.`,
      `D)  All of the above`,
    ],
    answer: `B) Unlimited length`,
  },
  {
    id: 14,
    question: `Which of the following declarations is incorrect in python language?`,
    options: [
      `A)  xyzp = 5,000,000`,
      `B)  x y z p = 5000 6000 7000 8000`,
      `C)  x,y,z,p = 5000, 6000, 7000, 8000`,
      `D)  x_y_z_p = 5,000,000`,
    ],
    answer: `B)  x y z p = 5000 6000 7000 8000`,
  },
  {
    id: 15,
    question: ` Which of the following words cannot be a variable in python language?`,
    options: [
      `A)  _val`,
      `B)  val`,
      `C)  try`,
      `D)  _try_`,
    ],
    answer: `C)   try`,
  },
  {
    id: 16,
    question: `Which of the following operators is the correct option for power(ab)?`,
    options: [
      `A) a ^ b`,
      `B)  a**b`,
      `C)  a ^ ^ b`,
      `D)  a ^ * b`,
    ],
    answer: `B) a**b`,
  },
  {
    id: 17,
    question: ` Which of the following precedence order is correct in Python?`,
    options: [
      `A)  Parentheses, Exponential, Multiplication, Division, Addition, Subtraction`,
      `B)  Multiplication, Division, Addition, Subtraction, Parentheses, Exponential`,
      `C)  Division, Multiplication, Addition, Subtraction, Parentheses, Exponential`,
      `D)  Exponential, Parentheses, Multiplication, Division, Addition, Subtraction`,
    ],
    answer: `A)   Parentheses, Exponential, Multiplication, Division, Addition, Subtraction`,
  },
  {
    id: 18,
    question: `Which one of the following has the same precedence level?`,
    options: [
      `A) Division, Power, Multiplication, Addition and Subtraction`,
      `B)  Division and Multiplication`,
      `C)  Subtraction and Division`,
      `D)  Power and Division`,
    ],
    answer: `C) Division and Multiplication`,
  },
  {
    id: 19,
    question: `Which one of the following has the highest precedence in the expression?`,
    options: [
      `A)  Division`,
      `B)  Subtraction`,
      `C)  Power`,
      `D)  Parentheses`,
    ],
    answer: `C)  Parentheses`,
  },
];
export default quizData;
