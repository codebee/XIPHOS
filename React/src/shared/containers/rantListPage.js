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
			rants:"",
			usertoken:this.props.usertoken
		}
		
		let token = "1LFq2mHVc9WH6NkgXVwV4L";
		const requestUserDeActive = async () => {							
		    const response = await postActions.getRantList(token);
		    this.setState({rants:response});		    			  		 		    	   
		}
		requestUserDeActive();	

		this.voteUp = this.voteUp.bind(this);
		this.voteDown = this.voteDown.bind(this);
	}


	//Vote up with user token
	//If user not loged visible login popup
	voteUp(e, myvote,userToken){		
		if(typeof userToken !== 'undefined' && userToken !== ""){

		}else{
			this.props.dispatchShowLoginPopup();
		}
		
	}

	//Vote up with user token
	//If user not loged visible login popup
	voteDown(e, myvote,userToken){		
		if(typeof userToken !== 'undefined' && userToken !== ""){

		}else{
			this.props.dispatchShowLoginPopup();
		}
	}	

	render(){
		const isLoading = this.props.isLoading;
		
		return(
			<React.Fragment>

				 {this.state.rants == "" ? (
				                            	 <Loader/> 
				                            ) : (				                            	
				                            	 <RantList rants={this.state.rants.posts}
				                            	 			dispatchVoteup = {this.voteUp}
				                            	 			dispatchvoteDown = {this.voteDown}/>	
				                            )}	
								
			</React.Fragment>	        	    	
		)
	}
}