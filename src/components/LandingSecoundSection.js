import React from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css";

import { Modal } from './Modal'
import AddStoryModal from './AddStoryModal'
M.AutoInit()

class LandingSecoundSection extends React.Component {

	state = {
		stories: [
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Ola",
				last_name: "Lekan"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Yussuf",
				last_name: "Suraj"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "James",
				last_name: "Bond"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Metro",
				last_name: "Boomin"
			},	
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Shao",
				last_name: "Khan"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Future",
				last_name: "Hendix"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Bisi",
				last_name: "Cole"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Rashidat",
				last_name: "Balogun"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Ali",
				last_name: "Bash"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Chucks",
				last_name: "Ene"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Snip",
				last_name: "Wesley"
			},
			{
				id: Math.random(),
				avatar: "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4",
				description: `A British man and his Spanish former love have finally married 16 years 
     									after they drifted apart, reunited by a love letter lost behind a fireplace for 
      								over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      								Their relationship ended after she moved France to run a shop in Paris.`,
				date: Date.now().toString(),
				first_name: "Seaun",
				last_name: "John"
			},																			
		]
	}

	addToStory = (story) => {

		story.id = Math.random()
		story.avatar = "https://avatars0.githubusercontent.com/u/11997567?s=460&v=4"
		story.date = Date.now().toString()

		console.log(story)

		this.setState({
			stories: [...this.state.stories, story]
		})

		console.log(this.state.stories.length)

	}

	componentDidMount(){
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems, {
    	preventScrolling: false
    })
	}

	render(){
		const users = this.state.stories.map((item, index) => {
			return (
		    <div className="col s12 m3" key={index}>
		      <div className="card">
		        <div className="card-image">
		          <img src={item.avatar} />
			      	<div className="btn-floating red darken-3 halfway-fab">
			      		<span style={{"paddingLeft":"0.8em"}}>{`${item.first_name.slice(0,1)}${item.last_name.slice(0,1)}`}</span>
			      	</div>		        
		        </div>
		        <div className="card-content">
		          <p>{`${item.description.slice(0, 100)}...`}</p>
		        </div>
		        <div className="card-action">
		          <div className="center">
		          	<a className="waves-effect red darken-3 waves-light btn modal-trigger" href="#modal1">Read More...</a>
		          </div>
		        </div>
		      </div>
		    </div>
			)
		})

		return (
			<div className="container">
				<div id="storySection">
					<div className="row">
						{ users }
					</div>
				</div>
				<Modal />
				<AddStoryModal addToStory={this.addToStory} />
			</div>
		)
	}
}

export default LandingSecoundSection
