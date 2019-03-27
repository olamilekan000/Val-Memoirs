import React from 'react'
import { Link } from 'react-router-dom'

class AddStoryModal extends React.Component {

	state = {
		user:{
			first_name: '',
			last_name: '',
			Username: '',
			gender: '',
			description: '',
			story: ''			
		},
		error: null,
		usernames: []
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	submitStory = e => {
		e.preventDefault()

		if (!this.state.usernames.includes(this.state.Username)) {

			if (
				this.state.user.first_name === '' ||
				this.state.user.last_name === '' ||
				this.state.user.description === '' ||
				this.state.user.description.length < 100
			) {
				this.setState({
					error: "Ops! Fillds cannot be empty."
				})
			}else{		
				this.setState({
					usernames: [...this.state.usernames, this.state.Username],
					error: null
				})
				this.props.addToStory(this.state)	
			}
		}else {
			this.setState({
				error: "A user with that username already exists"
			})
		}
	}

	render(){
		return (
		  <div id="modal2" className="modal">
		    <div className="modal-content">
		    	<div className="container">
		    		<h5>Add A Story...</h5>
		    	</div>
		    	<br />
		    	<br />
		    	<div className="container" id="modalForm">
				    <form className="col s12" onSubmit={this.submitStory}>
				      <div className="row">
			        	<div className="input-field col s6">
				          <input id="first_name" type="text" onChange={this.handleChange} required/>
				          <label htmlFor="first_name">First Name</label>
				        </div>
				        <div className="input-field col s6">
				          <input id="last_name" type="text" onChange={this.handleChange} required/>
				          <label htmlFor="last_name">Last Name</label>
				        </div>
				      </div>

				      <div className="row">
			        	<div className="input-field col s6">
				          <input id="Username" type="text" onChange={this.handleChange} required/>
				          <label htmlFor="Username">Username</label>
				        </div>
				        <div className="input-field col s6">
				          <input id="gender" type="text" onChange={this.handleChange} required/>
				          <label htmlFor="gender">Gender</label>
				        </div>
				      </div>

				      <div className="row">
				        <div className="input-field col s12">
				          <input id="description" type="text" onChange={this.handleChange} required/>
				          <label htmlFor="description">Headline</label>
				        </div>
				      </div>

				      <div className="row">
				        <div className="input-field col s12">
				          <textarea id="story" className="materialize-textarea" onChange={this.handleChange} required></textarea>
				          <label htmlFor="story">Story</label>
				        </div>
				      </div>

				      <button className="btn red darken-3" onClick={this.submitStory}>Save Story</button>
				    </form>
				    <br />
				    <div className="center">
				    	{ this.state.error ? <div style={{"color":"red"}}>{this.state.error}</div> : ''}
				    	{ this.state.user.description.length < 100 ? <div style={{"color":"orange"}}>Your description shouldn't be less than 100 characters.</div> : ''}
				    </div>    		
		    	</div>
		    </div>
		    <div className="modal-footer">
		      <Link to="#!" className="modal-close waves-effect waves-green btn-flat">Close</Link>
		    </div>
		  </div>
		)
	}
}

export default AddStoryModal
