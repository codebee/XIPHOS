import React from "react";
import ReactDOM from "react-dom";
import PostDetails from '../components/post/post-details'


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
					<PostDetails/>
				}

			</React.Fragment>	        	    	
		)
	}
}