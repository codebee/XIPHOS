import React from "react";
import ReactDOM from "react-dom";

import Header from "../components/common/header";
import Loader from "../components/common/loader";
import PostList from "../components/post/post-list";

export default class App extends React.Component{
	constructor(){
		super()

		this.state={
			user:"Gayan",
			view: "Post",
		}
	}

	render(){
		return(
			<React.Fragment>

				<Header user={this.state.user}/>
			    
			    {this.state.view == "Post" &&
					<section class="main layout--center">
			            <div class="main__content layout--wrapped">
			            	<Loader/>
			            	<PostList/>
			            </div>
			        </section>
			    }
	       </React.Fragment>	        	    	
		)
	}
}