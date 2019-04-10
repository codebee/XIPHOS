import React from "react";
import ReactDOM from "react-dom";

import PostList from "../components/post/post-list";


export default class RantListPage extends React.Component{
	constructor(props){
		super(props)		
	}	

	render(){
		const isLoading = this.props.isLoading;


		return(
			<React.Fragment>
				{!isLoading && 
					<PostList/>
				}
			</React.Fragment>	        	    	
		)
	}
}