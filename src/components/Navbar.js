import React from 'react'

import { Link } from 'react-router-dom'

class Navbar extends React.Component {
	render(){
		if (window.pageYOffset < 100) {
			return (
			  <nav className="transparent">
			    <div className="nav-wrapper z-depth-0">
			      <div className="container">
			        <div className="brand-logo">Val-Memoirs</div>
				      <ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li><Link to="/">Home</Link></li>
				        <li><Link to="/">Our Stories</Link></li>
				        <li><a className="waves-effect red darken-3waves-light waves-light btn modal-trigger" href="#modal2">Add A Story</a></li>
				      </ul>		        
			      </div>
			    </div>
			  </nav>
			)
		}else{
			return (
			  <nav className="navStyleColor">
			    <div className="nav-wrapper red darken-3 z-depth-0">
			      <div className="container">
			        <div className="brand-logo">Val-Memoirs</div>
				      <ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li><Link to="/">Home</Link></li>
				        <li><Link to="/">Our Stories</Link></li>
				        <li><a className="waves-effect white darken-3 waves-light btn modal-trigger" href="#modal2" style={{"color":"red"}}>Add A Story</a></li>
				      </ul>		        
			      </div>
			    </div>
			  </nav>
			)			
		}
	}
}

export default Navbar
