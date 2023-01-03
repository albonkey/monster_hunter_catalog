import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import MyComponent from '../../components/MyComponent/MyComponent';
import SearchBar from '../../components/SearchBar/SearchBar';
import {getMonster, listMonsters} from '../../actions/searchMonsters.js';
const HomePage = () => {
	const [monsters, setMonsters] = useState([]);
	const [currentMonster, setCurrentMonster] = useState(undefined);
	const myMonster = {

	}
	useEffect(() => {
		listMonsters('', '', 'a').then(monsterList => {
			setMonsters([...monsterList]);
		})
	}, [])

	const searchMonsters = (name, species, location) => {
		listMonsters(name, species, location).then(monsterList => {
			setMonsters([...monsterList]);
			console.log('Search complete')
			console.log(monsterList)
		})
	}
		 return(
		 <div className='home-page'>
			 <div className='header'>
			 	<h2>Monster Manual</h2>
			 </div>
			 <div className='main'>
			 	<div className='menu'>
					<SearchBar searchHandler={searchMonsters}/>
					<div className='search-results-title'>Search Results</div>
					<div className='search-list'>
						{
							monsters.length > 0 ?
							monsters.map(monster => {
								return <div key={monster.id} className='search-result' onClick={() => {
									getMonster(monster.id).then(monster => {
										setCurrentMonster(monster);
									})
								}}>
									<div>{monster.name}</div>
									<div className='search-result-species'>{monster.species}</div>

								</div>
							}) :
							<div>No monsters found..</div>
						}
					</div>
				</div>
				{
					currentMonster ?
						<MyComponent monster={currentMonster} className='my-component-img'/> :
						<MyComponent className='my-component-img'/>

				}

			</div>
		 </div>
	 )
}

export default HomePage;
