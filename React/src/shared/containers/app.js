import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from "../components/common/header";
import Loader from "../components/common/loader";
import LoginPopup from "../components/common/loginPopup";

import * as actionType from '.././actions/actionType';

import RantListPage from "./rantListPage";
import RantDetailsPage from "./rantDetailsPage";

export default class App extends React.Component{
	constructor(props){
		super(props)

		let getLoggedInStorage = actionType.getLocalStorage("logged-in");
		let user ="Gayan";
		let showJoinButton = true;

		if(getLoggedInStorage !== null){
			let getLoggedInObj = JSON.parse(getLoggedInStorage);			
			if(typeof getLoggedInObj.token !== 'undefined'){

				console.log(getLoggedInObj.token);

				user = getLoggedInObj.username;
				showJoinButton = false;
			}			
		}

		this.state={
			user:user,
			view: "Post",
			isLoading: true,
			isOpen:false,
			showJoinButton:showJoinButton
		}		

		this.showLoginPopup = this.showLoginPopup.bind(this);
		this.userSignOut = this.userSignOut.bind(this);
		this.closePopup = this.closePopup.bind(this);
		this.getUserLoginData = this.getUserLoginData.bind(this);
	}

	componentDidMount(){
		const that = this;
		setTimeout(function(){
			{that.setState({isLoading:false})}
		},1000);
	}

	//show login popup
	showLoginPopup(e){   	    
	    this.setState({isOpen:true});
	}

	userSignOut(logoutres){
		console.log("sing out",logoutres);
		this.setState({isOpen:false,user:"",showJoinButton:true});
	}

	//close login popup
	closePopup(e){		
		this.setState({isOpen:false});
	}	

	getUserLoginData(user){
		console.log(user);
		//if(user.ok){
			this.setState({isOpen:false,user:user.username,showJoinButton:false});
		//}
	}

	render(){
		
		console.log(this.state);

		return(
			
				<Router>
					<React.Fragment>
						<Header user={this.state.user} showJoinButton={this.state.showJoinButton} dispatch={this.showLoginPopup} dispatchUserSignOut={this.userSignOut}/>
				    					    
						<section className="main layout--center">
				            <div className="main__content layout--wrapped">


				            	{this.state.isLoading && 
				            		<Loader/>
				            	}

				            	<Route exact path="/" render={(props) => <RantListPage {...props} isLoading={this.state.isLoading}/>} />
				            	<Route exact path="/rant/:rant_id" render={(props) => <RantDetailsPage {...props} isLoading={this.state.isLoading}/>} />


				            	<LoginPopup 
				            		isOpen={this.state.isOpen} 
				            		dispatch={this.closePopup}
				            		dispatchUserLoginData = {this.getUserLoginData}
				            	/>
				            	
				            </div>
				        </section>
				      </React.Fragment>  
			    </Router>
	      	        	    	
		)
	}
}