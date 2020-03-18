import React,{ Component } from "react";

class ClassProps extends Component{
	render(){
		return (
			<div>
				<h2>Class Props</h2>
				<p>{this.props.name} {this.props.lastName}: {this.props.age} años</p>
			</div>
		)
	}
}

/*
	VALORES POR DEFAULT
*/

ClassProps.defaultProps = {
	name:'Eli',
	lastName: 'Ramos',
	age: 23
}

export default ClassProps;


/*
	exportar implicitamente
*/
	// export default class ClassProps extends Component{
	// 	render(){
	// 		return (
	// 			<div>
	// 				<h2>Class Props</h2>
	// 				<p>{this.props.name} {this.props.lastName}: {this.props.age} años</p>
	// 			</div>
	// 		)
	// 	}
	// }




