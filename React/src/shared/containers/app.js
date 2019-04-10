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
			isLoading: true
		}
	}

	componentDidMount(){
		const that = this;
		setTimeout(function(){
			{that.setState({isLoading:false})}
		},1000);
	}

	render(){
		return(
			<React.Fragment>

				<Header user={this.state.user}/>
			    
			    
					<section class="main layout--center">
			            <div class="main__content layout--wrapped">


			            	{this.state.isLoading && 
			            		<Loader/>
			            	}

			            	{this.state.view == "Post" && !this.state.isLoading &&
			            		<PostList/>
			            	}


			            </div>
			        </section>
			    
	       </React.Fragment>	        	    	
		)
	}
}