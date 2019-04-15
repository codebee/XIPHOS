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
		
		let token = "8h3ZPVGARJQx24ES9sJqRj";
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
	voteUp(e, myvote, rantid, userToken){		
		if(typeof userToken !== 'undefined' && userToken !== ""){
			if(myvote == "1"){
				console.log("vote up" , myvote, rantid, userToken);

				let voteObj = {
					"postId": rantid,
					"direction": "up" 
				}

				const requestVoteUp = async () => {
				    const response = await postActions.rantVote(userToken,voteObj);
				    console.log(response);
				        
				}
				requestVoteUp();

			}else{
				console.log("no vote up");
			}
		}else{
			this.props.dispatchShowLoginPopup();
		}
		
	}

	//Vote up with user token
	//If user not loged visible login popup
	voteDown(e, myvote,rantid, userToken){		
		if(typeof userToken !== 'undefined' && userToken !== ""){
			if(myvote == "1"){
				console.log("vote up");

				let voteObj = {
					"postId": rantid,
					"direction": "down" 
				}

				const requestVoteUp = async () => {
				    const response = await postActions.rantVote(userToken,voteObj);
				    console.log(response);
				        
				}
				requestVoteUp();

			}else{
				console.log("no vote down");
			}
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