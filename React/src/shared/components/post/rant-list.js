import React from "react";
import ReactDOM from "react-dom";

import Rant from "./rant";

export default class RantList extends React.Component{
	constructor(props){
		super(props)		
	}

	render(){

		let rants = this.props.rants;
		let getRantsHtml = () => {
				let rantsHtml = "";
				
				rantsHtml = rants.map((rant,i) => {					
					return <React.Fragment key={i}>
							 <Rant rant={rant}/>
						   </React.Fragment>
				});

				return rantsHtml;
		}


		

		return(
			 <div className="post-list">			 	
			 	{getRantsHtml()}
			 	<div className="rant__add" title="Add Rant">+</div>
			 </div>
		)
	}
}