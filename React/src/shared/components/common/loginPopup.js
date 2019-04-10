import React from "react";
import Loader from "./loader";

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
		                        NEW <span class="highlight">#</span>RANT
		                    </div>
		                    <div class="form__description">
		                        Express yourself with 140 characters.
		                    </div>
		                    <form name="new-rant">
		                        <div class="new-rant">
		                            <textarea maxlength="140"></textarea>

		                            <Loader/>

		                            <div class="form__error">
		                                Some fields are missing !
		                            </div>

		                            <input type="submit" value="POST"/>
		                        </div>
		                    </form>
		                </div>

		            </div>
		        </div>
		    </div>
		)
	}
}