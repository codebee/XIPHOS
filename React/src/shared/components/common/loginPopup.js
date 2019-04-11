import React from "react";
import Loader from "./loader";

export default class LoginPopup extends React.Component{
	constructor(props){
		super(props)

		this.state={
			isOpen:this.props.isOpen,
			isLoginAttempt : false,
			isLoginValidate : false
		}
		
		this.closePopup = this.props.dispatch;

		// create a ref to store the textInput DOM element
	    this.textInputUserName = React.createRef();
	}	

	componentDidMount(){		
	   this.textInputUserName.current.focus();
	}	

	render(){	

			
		const isOpen = this.props.isOpen;		
		const popupToggle = (isOpen ? "popup--open" : "popup--close")
		if(isOpen){
			this.textInputUserName.current.focus();
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
				                    <form name="login">
				                        <div className="login">

				                            <input type="text" placeholder="USERNAME"  ref={this.textInputUserName}/>
				                            <input type="password" placeholder="PASSWORD" />				                           

				                            {this.state.isLoginAttempt && 
				                            	<Loader />
				                            }
				                            
				                            {this.state.isLoginValidate &&
				                            	<div className="form__error">
					                                Some fields are missing !
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