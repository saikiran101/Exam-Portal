import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import SignUp1 from './components/auth/Signup1'
import LogicalProgramming from './components/dashboard/LogicalProgramming';
import ProgrammingMCQ from './components/dashboard/ProgrammingMCQ';
import Instractions from './components/dashboard/Instractions';
import quiz from './components/dashboard/quiz';
import Admin from './components/auth/Admin';
import AdminDash from './components/adminDashboard/AdminDash';
import quiz1 from './components/dashboard/quiz1';
import Navb from './components/layout/Navb';
import ContactUs from './components/layout/ContactUs';
import AdminDashBoard from './components/adminDashboard/AdminDashBoard';
import JavaQb from './components/adminDashboard/JavaQb';
import PythonQb from './components/adminDashboard/PythonQb';
import PythonEditor from './components/adminDashboard/PythonEditor';
//import Footer from './components/layout/Footer';



class App extends Component {
  render() {
    return (
			<Router>
				<div>
					{/*<Navbar />*/}
					<Navb />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/login" component={SignUp1} />
						<Route path="/LogicalProgramming" component={LogicalProgramming} />
						<Route path="/ProgrammingMCQ" component={ProgrammingMCQ} />
						<Route path="/Instractions" component={Instractions} />
						<Route path="/Test" component={quiz} />
						<Route path="/Test1" component={quiz1} />
						<Route path="/Admin" component={Admin} />
						<Route path="/AdminDash" component={AdminDash} />
						<Route path="/AdminDashBoard" component={AdminDashBoard} />
						<Route path="/JavaQb" component={JavaQb} />
						<Route path="/PythonQb" component={PythonQb} />
						<Route path="/PythonEditor" component={PythonEditor} />
						<Route path="/contactUs" component={ContactUs} />
						<Redirect path="/" />
					</Switch>
					{/*<Footer/>*/}
				</div>
			</Router>
		);
  }
}

export default App;
