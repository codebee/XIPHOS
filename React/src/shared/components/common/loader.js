import React from "react";

export default class LoginPopup extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
				<div class="popup popup--open">
			        <div class="popup__header">
			            <div title="Close" class="close layout--center">
			                X
			            </div>
			        </div>
			        <div class="popup__body layout--center">
			            <div class="popup__body-inner">

			                <div class="form">
			                    <div class="form__title">
			                        JOIN <span class="highlight">#</span>DEVRANT
			                    </div>
			                    <div class="form__description">
			                        Vote and comment on others' rants. Post your own.
			                    </div>
			                    <form name="login">
			                        <div class="login">

			                            <input type="text" placeholder="USERNAME" />
			                            <input type="password" placeholder="PASSWORD" />

			                            <div class="loader">
			                                <div class="spinner"></div>
			                            </div>

			                            <div class="form__error">
			                                Some fields are missing !
			                            </div>

			                            <input type="submit" value="LET ME IN" />
			                        </div>
			                    </form>
			                </div>
			            </div>
			        </div>
			    </div>
		)
	}
}