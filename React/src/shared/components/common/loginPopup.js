import React from "react";
import Loader from "./loader";
import validators from './validator';

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
				        password: '',
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

		if(this.state.userInfo.username == ""){
			this.setState({errorMsg:"Username is required", isLoginValidate: false});
		}

		if(this.state.userInfo.password == ""){
			this.setState({errorMsg:"Password is required", isLoginValidate: false});
		}

		if(this.state.userInfo.username == "" && this.state.userInfo.password == ""){
			this.setState({errorMsg:"Some fields are missing !", isLoginValidate: false});
		}

		if(this.state.userInfo.username !== "" && this.state.userInfo.password !== ""){
			this.setState({errorMsg:"", isLoginValidate: true});
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

			this.resetState();

			if(!this.state.isUserVisited){
				this.textInputUserName.current.focus();
				this.setState({isUserVisited:true});
			}
		}

				

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
                  							/>
                  							
				                            <input 
				                            	type="password" 
				                            	placeholder="PASSWORD"				                            	
				                            	id="password" 
				                            	value={this.state.userInfo.password}
                  								onChange={event => this.handleInputChange(event, 'password')}
                  								onBlur={event => this.handleInputOnblur(event, 'password')}
                  							/>				                           
                  							

				                            {this.state.isLoginAttempt && 
				                            	<Loader />
				                            }
				                            
				                            {!this.state.isLoginValidate &&
				                            	<div className="form__error">
					                               {this.state.errorMsg}
					                            </div>				                            	
				                            }
				                            
				                            <input type="submit" value="LET ME IN" />
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