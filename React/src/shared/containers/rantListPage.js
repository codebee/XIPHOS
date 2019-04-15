import React from "react";
import ReactDOM from "react-dom";

import RantList from "../components/post/rant-list";
import Loader from "../components/common/loader";

import * as userActions from '../actions/userActions';
import * as postActions from '../actions/postActions';

export default class RantListPage extends React.Component{
	constructor(props){
		super(props)

		this.state={
			rants:""
		}
		
		let token = "1LFq2mHVc9WH6NkgXVwV4L";
		const requestUserDeActive = async () => {							
		    const response = await postActions.getRantList(token);
		    this.setState({rants:response});		    			  		 		    	   
		}

		requestUserDeActive();	
	}	

	render(){
		const isLoading = this.props.isLoading;

		console.log(this.state);

		return(
			<React.Fragment>

				 {this.state.rants == "" ? (
				                            	 <Loader/> 
				                            ) : (				                            	
				                            	 <RantList rants={this.state.rants.posts}/>	
				                            )}	
								
			</React.Fragment>	        	    	
		)
	}
}