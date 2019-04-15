import React from "react";
import Loader from "./loader";
import validators from './validator';

import * as errorMsg from '../../actions/actionType';
import * as userActions from '../../actions/userActions';

export default class LoginPopup extends React.Component{
	constructor(props){
		super(props)		

		this.state=this.initialState;
		
		this.closePopup = this.props.dispatch;
		
		// create a ref to store the textInput DOM element
	    this.textInputUserName = React.createRef();

	   
	    // Correctly Bind class methods to reacts class instance
	    this.handleInputChange = this.handleInputChange.bind(this);	
	    this.handleInputOnblur = this.handleInputOnblur.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);  
	}	

	get initialState() {
      return {
			isOpen:false,
			isLoginAttempt : false,
			isLoginValidate : true,
			isUserVisited: false,
			userInfo: {
				        username: '',
				        password: ''
				      },			
			errorMsg:"Some fields are missing !"
		};
    }

	componentDidMount(){		
	   this.textInputUserName.current.focus();
	}

	handleInputChange(event, inputPropName){
		const newState = Object.assign({}, this.state);
	    newState.userInfo[inputPropName] = event.target.value;

	    console.log(newState.userInfo[inputPropName], inputPropName,this.state.userInfo.password);

	    if(inputPropName == "password"){
	    	this.setState({password:event.target.value});
	    }
	    if(inputPropName == "username"){
	    	this.setState({username:event.target.value});
	    }

	    this.setState(newState);
	}

	handleInputOnblur(event, inputPropName){
		let getInputValue = this.state.userInfo[inputPropName];
		
		if(this.state.isUserVisited){
			if(inputPropName == "username" && getInputValue == ""){
				this.setState({errorMsg:"Username is required", isLoginValidate: false});
			}

			if(inputPropName == "password" && getInputValue == ""){
				this.setState({errorMsg:"Password is required", isLoginValidate: false});
			}
		}		
	}

	handleSubmit(e){
		console.log(this.state.userInfo);

		let username = this.state.userInfo.username;
		let password = this.state.userInfo.password;

		if(username == ""){
			this.setState({errorMsg:"Username is required", isLoginValidate: false});
		}

		if(password == ""){
			this.setState({errorMsg:"Password is required", isLoginValidate: false});
		}

		if(username == "" && password == ""){
			this.setState({errorMsg:"Some fields are missing !", isLoginValidate: false});
		}

		if(username !== "" && password !== ""){
			this.setState({errorMsg:"", isLoginValidate: true});

			let user={
						"username": username,
						"password": password
					}

			this.setState({isLoginAttempt:true});

			const requestUserActive = async () => {
			    const response = await userActions.userActive(user);

			    this.setState({isLoginAttempt:false});

			    if(response.ok){
			    	//Disptach login success
			    	this.props.dispatchUserLoginData(response)
			    }else{
			    	let errMsg = errorMsg.SERVER_ERROR_MESSAGE(response.error);
			    	console.log(errMsg); 
			    	this.setState({errorMsg:errMsg, isLoginValidate: false});
			    }
			    	    
			}

			requestUserActive();
		}

		e.preventDefault();
	}

	resetState(){
		const newState = Object.assign({}, this.state);
	    newState.userInfo["usesrname"] = "";
	    newState.userInfo["password"] = "";	    
	}
	
	render(){	
			
		const isOpen = this.props.isOpen;
		let popupToggle="popup--close";
		if(isOpen){
			popupToggle = "popup--open";

			//this.resetState();

			if(!this.state.isUserVisited){
				this.textInputUserName.current.focus();
				this.setState({isUserVisited:true});
			}
		}

		console.log(this.state,this.state.userInfo.password);

		let isLoginBoxVisibleClass = (this.state.isLoginAttempt)?'hide':'';		

		return(
			<React.Fragment>				
					<div className={"popup "+popupToggle}>
				        <div className="popup__header">
				            <div title="Close" className="close layout--center" onClick={this.closePopup}>
				                X
				            </div>
				        </div>
				        <div className="popup__body layout--center">
				            <div className="popup__body-inner">

				                <div className="form">
				                    <div className="form__title">
				                        JOIN <span className="highlight">#</span>DEVRANT
				                    </div>
				                    <div className="form__description">
				                        Vote and comment on others' rants. Post your own.
				                    </div>
				                    <form name="login" onSubmit={this.handleSubmit}>
				                        <div className="login">

				                            <input 
				                            	type="text" 
				                            	placeholder="USERNAME"  
				                            	ref={this.textInputUserName} 
				                            	id="username" 
				                            	value={this.state.userInfo.username}
                  								onChange={event => this.handleInputChange(event, 'username')}
                  								onBlur={event => this.handleInputOnblur(event, 'username')}
                  								className={isLoginBoxVisibleClass}
                  							/>
                  							
				                            <input 
				                            	type="password" 
				                            	placeholder="PASSWORD"				                            	
				                            	id="password" 
				                            	value={this.state.userInfo.password}
                  								onChange={event => this.handleInputChange(event, 'password')}
                  								onBlur={event => this.handleInputOnblur(event, 'password')}
                  								className={isLoginBoxVisibleClass}
                  							/>				                                             							

				                            {this.state.isLoginAttempt && 
				                            	<Loader />
				                            }
				                            
				                            {!this.state.isLoginValidate &&
				                            	<div className="form__error">
					                               {this.state.errorMsg}
					                            </div>				                            	
				                            }

				                            {this.state.isLoginAttempt ? (
				                            	 <input type="submit" value="LET ME IN" disabled/>
				                            ) : (
				                            	 <input type="submit" value="LET ME IN"/>
				                            )}				                            
				                           
				                        </div>
				                    </form>
				                </div>
				            </div>
				        </div>
				    </div> 
			
			</React.Fragment>
			
		)
	}
}