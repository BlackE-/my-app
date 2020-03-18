import React from "react";

const FunctionProps = (props) => {
	return(
		<div>
			<h2>Function Props</h2>
			<p>{props.name} {props.lastName}: {props.age} años</p>
		</div>
	);
}


export default FunctionProps;