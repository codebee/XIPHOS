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
			isOpen:true
		}
	}

	componentDidMount(){
		const that = this;
		setTimeout(function(){
			{that.setState({isLoading:false, isOpen:false})}
		},1000);
	}

	render(){

		console.log("test", this.state.isLoading);
		return(
			
				<Router>
					<React.Fragment>
						<Header user={this.state.user}/>
				    					    
						<section className="main layout--center">
				            <div className="main__content layout--wrapped">


				            	{this.state.isLoading && 
				            		<Loader/>
				            	}

				            	<Route exact path="/" render={(props) => <RantListPage {...props} isLoading={this.state.isLoading}/>} />
				            	<Route exact path="/rant/:rant_id" render={(props) => <RantDetailsPage {...props} isLoading={this.state.isLoading}/>} />


				            	<LoginPopup isOpen={this.state.isOpen}/>
				            	
				            </div>
				        </section>
				      </React.Fragment>  
			    </Router>
	      	        	    	
		)
	}
}