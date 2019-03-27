import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import { Landing } from './components/Landing'
import Footer from './components/Footer'

class App extends Component {

	state = {
		pageYOffset: 0
	}

	componentDidMount(){
		window.addEventListener('scroll', this.checkWindowOffset)
	}

	checkWindowOffset = (e) => {
		this.setState({
			pageYOffset: window.pageYOffset
		})
	}

  render() {
    return (
    	<BrowserRouter>
        <div>
          <Navbar pageYOffset={this.state.pageYOffset}/>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
            </Switch>
          </main>
          <Footer />        
        </div>      		
    	</BrowserRouter>
    );
  }
}

export default App;
