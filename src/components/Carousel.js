import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider'; 
import '../../node_modules/react-animated-slider/build/horizontal.css';
import '../../node_modules/react-animated-slider/build/horizontal.css';

import unsplash from '../config/unsplash'

class Sliders extends Component {
	state = {
		content: []
	}

	componentDidMount(){
		this.unsplashAPICall()
	}

	unsplashAPICall = async () => {
		const response = await unsplash.search.photos("people holding hands", 5)
		const data = await response.json()

		this.setState({
			content: data.results.slice(5, 10)
		})
	}

	render(){
		const settings = {
			infinite: true,
			autoplay: 2000,
			duration: 2000
		}
		return (
			<div className="track slider-wrapper slider">
				<Slider className="center next animateIn animateOut" {...settings}>
					{this.state.content.map((item, index) => (
						<div
							key={index}
							className="slider-content"
							style={{ background: `url('${item.urls.full}') no-repeat center center` }}
						>
							<div className="contents slide inner">
								<h1 className='itemTitle'>{item.alt_description}</h1>					
							</div>

							<div className="contents slide inner">
								<div className="sliderContent">
									<a className="btn-large red darken-3 pulse waves-effect waves-light modal-trigger" href="#modal2">Share Story</a>								
								</div>
							</div>

						</div>	
					))}
				</Slider>
			</div>
		)		
	}
}

export default Sliders
