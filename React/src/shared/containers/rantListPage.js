import React from "react";
import ReactDOM from "react-dom";

import RantList from "../components/post/rant-list";
import Loader from "../components/common/loader";

export default class RantListPage extends React.Component{
	constructor(props){
		super(props)		
	}	

	render(){
		const isLoading = this.props.isLoading;

		return(
			<React.Fragment>
				
				{isLoading &&
					<Loader/> 
				}
            	           	

				{!isLoading && 					
					<RantList/>					
				}
			</React.Fragment>	        	    	
		)
	}
}