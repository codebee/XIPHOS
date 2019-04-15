import React from "react";
import ReactDOM from "react-dom";

import * as userActions from '../../actions/userActions';
import * as actionType from '../../actions/actionType';

export default class Header extends React.Component{
	constructor(props){
		super(props)

		this.state={
			user:this.props.user,
			showJoinButton:this.props.showJoinButton,
			usertoken:this.props.usertoken
		}
		
		this.showLoginPopup = this.props.dispatch;
		this.userSignOut = this.userSignOut.bind(this);		
	}
	
	userSignOut(e,token){		
		const requestUserDeActive = async () => {
							
			    const response = await userActions.userDeActive(token);
			    
			    console.log(response);
			    if(response.ok){

			    	actionType.removeLocalStorage("logged-in");
			    	//Disptach login success
			    	this.props.dispatchUserSignOut(response)
			    }else{
			    	console.log("error");
			    }
			    	    
			}

			requestUserDeActive();
	}	
	
	render(){		
		let user =this.props.user;
		let	showJoinButton = this.props.showJoinButton;
		let token = this.state.usertoken;
		
		return(
			<React.Fragment>	
				<section className="header layout--center">
		            <div className="header__content layout--wrapped">
		                <div className="brand">
		                    <a href="/"><div className="brand__name"><span>#</span>DEVRANT</div></a>
		                </div>

		                {!showJoinButton &&
		                	<div className="profile layout--center">
			                    <div className="profile__picture">
			                        <svg height="36" width="36">
			                            <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
			                        </svg>
			                    </div>
			                    <div className="profile__name">{user}</div>
			                </div>
		                }

		                <div className="join">
		                	{showJoinButton &&		                	
		                		<span onClick={this.showLoginPopup}>Join</span>
		                	}
		                	

		                	{!showJoinButton &&		                		
		                		<span onClick={event => this.userSignOut(event, token)}>Sign Out</span>
		                	}	                   
		                    
		                </div>

		               			          		                
		            </div>
		        </section>
	        </React.Fragment>	
		)
	}
}