import React from "react";
import ReactDOM from "react-dom";

import Post from "./post";

export default class PostList extends React.Component{
	constructor(props){
		super(props)		
	}

	render(){
		return(
			 <div class="post-list">
			 	<Post/>
			 </div>
		)
	}
}