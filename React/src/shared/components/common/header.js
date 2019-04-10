import React from "react";
import ReactDOM from "react-dom";

export default class Header extends React.Component{
	constructor(props){
		super(props)

		this.state={
			user:this.props.user
		}

		console.log(this.props);
	}

	render(){
		return(
			<section className="header layout--center">
	            <div className="header__content layout--wrapped">
	                <div className="brand">
	                    <a href="/"><div className="brand__name"><span>#</span>DEVRANT</div></a>
	                </div>

	                {/*User Profile*/}	                
	                <div className="profile layout--center">
	                    <div className="profile__picture">
	                        <svg height="36" width="36">
	                            <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
	                        </svg>
	                    </div>
	                    <div className="profile__name">{this.state.user}</div>
	                </div>

	                <div className="join">
	                	{/*<span>Join</span> */}	                   
	                    <span>Sign Out</span>
	                </div>
	            </div>
	        </section>
		)
	}
}