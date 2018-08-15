'use strict';

/*
app.js is the proverbial public static void main() of our JavaScript application. 

*/

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		               firstName: '',
		               lastName: '',
		               description: ''		               
		             };
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/employees/2'}).done(response => {
			this.setState({firstName: response.entity.firstName});
			this.setState({lastName: response.entity.lastName});
			this.setState({description: response.entity.description});
			console.log (response);
		});
	}

	render() {
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					<tr>
						<td>{this.state.firstName}</td>
						<td>{this.state.lastName}</td>
						<td>{this.state.description}</td>
					</tr>
				</tbody>
			</table>
		)
	}
}
// end::app[]

// tag::employee-list[]
class EmployeeList extends React.Component{
	render() {
		var employee = this.props.employee
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					<tr>
						<td>{this.props.firstName}</td>
						<td>{this.props.lastName}</td>
						<td>{this.props.description}</td>
					</tr>
				</tbody>
			</table>
		)
	}
}
// end::employee-list[]

// tag::employee[]
class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.firstName}</td>
				<td>{this.props.lastName}</td>
				<td>{this.props.description}</td>
			</tr>
		)
	}
}
// end::employee[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]

