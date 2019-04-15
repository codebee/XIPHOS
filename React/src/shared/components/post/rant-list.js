import React from "react";
import ReactDOM from "react-dom";

import Rant from "./rant";

export default class RantList extends React.Component{
	constructor(props){
		super(props)		
	}

	render(){
		return(
			 <div className="post-list">
			 	<Rant/>

			 	<div class="rant__add" title="Add Rant">+</div>
			 </div>
		)
	}
}