import React from "react";
import ReactDOM from "react-dom";


export default class RantDetailsPage extends React.Component{
	constructor(props){
		super(props)

		console.log(props);		
	}	

	render(){		
		const isLoading = this.props.isLoading;

		return(
			<React.Fragment>

				{!isLoading && 
					<div>
						RantDetailsPage
					</div>
				}

			</React.Fragment>	        	    	
		)
	}
}