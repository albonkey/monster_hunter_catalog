import React from 'react';
import './HomePage.scss';
import MyComponent from '../../components/MyComponent/MyComponent';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = () => {
	const myMonster = {
		id:4,
		type:"small",
		species:"neopteron",
		name:"Vespoid",
		description:"Insects that paralyze their targets with their long stingers. They break easily, so attack them with poison or slinger ammo if you want to carve them.",
		ailments:[{
			id:7,
			name:"Paralysis",
			description:"Paralysis renders the hunter or monster immobilized and susceptible to increased damage for the duration. Hunters can unparalyzed if they are hit."
		}],
		protection: {skills:[{"id":2,"name":"Paralysis Resistance","description":"Reduces the duration of paralysis."}]},
		locations:[{id:1,zoneCount:17,name:"Ancient Forest"},{id:2,zoneCount:15,name:"Coral Highlands"},{id:3,zoneCount:15,name:"Wildspire Waste"}],
		weaknesses:[{element:"fire",stars:1,condition:null},{element:"poison",stars:1,condition:null}],
	}

	 return(
		 <div className='home-page'>
			 <div className='header'>
			 	<h2>Monster Manual</h2>
			 </div>
			 <div className='main'>
			 	<div className='menu'>
					<SearchBar />
				</div>
				<MyComponent monster={myMonster} className='my-component-img'/>
			</div>
		 </div>
	 )
}

export default HomePage;
