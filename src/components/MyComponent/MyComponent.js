import React from 'react';
import './MyComponent.scss';

const MyComponent = ({ monster}) => {
	let image;
	try{
		image = require(`../../assets/monster${monster.id}.png`)
	} catch(error){
		image = require(`../../assets/monsterx.png`)
	}
	 return(
		 <div className='my-component'>
		 	<div className='my-component-content'>
				<div className='left-page'>
					<div className='monster-name'>{monster.name}</div>
					<div className='monster-species'>{monster.species} | <span className='monster-type'>{monster.type}</span></div>

					<br />
					<img src={image} className='monster-image'/>
				</div>
				<div className='right-page'>
					<div className='info-header'>Description</div>
					<div className='info-text'>{monster.description}</div>
					<div className='info-header'>Locations</div>
					<div className='info-text'>
						{
							monster.locations.map((location, i) => {
								if(i === 0){
									return `${location.name}`
								} else {
									return `, ${location.name}`
								}
							})
						}
					</div>
					<div className='info-header'>Ailments</div>
					<div className='info-text'>
						{
							monster.ailments.length > 0 ?
							monster.ailments.map(ailment => {
								return <div>
													<div className='info-underheader'>{ailment.name}</div>
													<div>{ailment.description}</div>
											</div>
							}) :
							<div> --- </div>
						}
					</div>
					<div className='info-header'>Weaknesses</div>
					<div className='info-text'>
						{
							monster.weaknesses.map((weakness, i) => {
								if(i === 0){
									return `${weakness.element}`
								} else {
									return `, ${weakness.element}`
								}

							})
						}
					</div>
				</div>

			</div>
			<img src={require('../../assets/book.png')} className='my-component-img'/>
		 </div>
	 )
}
MyComponent.defaultProps = {
	monster:{
		id:4,
		type:"small",
		species:"neopteron",
		name:"Name",
		description:"Description",
		ailments:[{
			id:7,
			name:"Ailment",
			description:"Description"
		}],
		protection: {skills:[{"id":2,"name":"Paralysis Resistance","description":"Reduces the duration of paralysis."}]},
		locations:[{id:1,zoneCount:17,name:"Ancient Forest"},{id:2,zoneCount:15,name:"Coral Highlands"},{id:3,zoneCount:15,name:"Wildspire Waste"}],
		weaknesses:[{element:"fire",stars:1,condition:null},{element:"poison",stars:1,condition:null}],

	}
	}
export default MyComponent;
