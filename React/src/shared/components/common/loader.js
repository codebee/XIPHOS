import React from "react";

export default class Loader extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div class="loader">
              <div class="spinner"></div>
            </div>
		)
	}
}