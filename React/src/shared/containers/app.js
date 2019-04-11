import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from "../components/common/header";
import Loader from "../components/common/loader";
import LoginPopup from "../components/common/loginPopup";

import RantListPage from "./rantListPage";
import RantDetailsPage from "./rantDetailsPage";



export default class App extends React.Component{
	constructor(){
		super()

		this.state={
			user:"Gayan",
			view: "Post",
			isLoading: true,
			isOpen:false,

		}

		this.showLoginPopup = this.showLoginPopup.bind(this);
		this.closePopup = this.closePopup.bind(this);
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

	//close login popup
	closePopup(e){		
		this.setState({isOpen:false});
	}	

	render(){
		
		return(
			
				<Router>
					<React.Fragment>
						<Header user={this.state.user} dispatch={this.showLoginPopup}/>
				    					    
						<section className="main layout--center">
				            <div className="main__content layout--wrapped">


				            	{this.state.isLoading && 
				            		<Loader/>
				            	}

				            	<Route exact path="/" render={(props) => <RantListPage {...props} isLoading={this.state.isLoading}/>} />
				            	<Route exact path="/rant/:rant_id" render={(props) => <RantDetailsPage {...props} isLoading={this.state.isLoading}/>} />


				            	<LoginPopup isOpen={this.state.isOpen} dispatch={this.closePopup}/>
				            	
				            </div>
				        </section>
				      </React.Fragment>  
			    </Router>
	      	        	    	
		)
	}
}