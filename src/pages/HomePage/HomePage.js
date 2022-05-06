import React from 'react';
import './HomePage.scss';
import style from '../../components/SearchBar/SearchBar.module.scss';
import '../../components/MyComponent/MyComponent.scss';
//import MyComponent from '../../components/MyComponent/MyComponent';

const MyComponent = ({monster}) => {
		return(
			<div className='my-component'>
				<div className='my-component-content'>
					<div className='left-page'>
						<div className='monster-name'>{monster.name}</div>
						<div className='monster-species'>{monster.species} | <span className='monster-type'>{monster.type}</span></div>

						<br />
						<img src={require(`../../assets/monster${monster.id}.png`)} className='monster-image'/>
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
						<div className='info-header'>Resistances</div>
						<div className='info-text'>
							{
								monster.resistances.map(protection => {
									return <div>
														<div className='info-underheader'>{protection.element}</div>
												</div>
								})
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
		);
	}


const SearchBar = (props) => {
	const {
		searchQuery,
		onChange,
		search
	  } = props;

	return(
		<div className={style.Container}>
		<label>Monster Name</label>
			<input type='text' value={searchQuery} onChange={onChange} placeholder='Search' className={style.Input}></input>
		   <button onClick={search}>Search</button>
		</div>
	)
}

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInitial: true,
			initial: {
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
				resistances: [],
				locations:[{id:1,zoneCount:17,name:"Ancient Forest"},{id:2,zoneCount:15,name:"Coral Highlands"},{id:3,zoneCount:15,name:"Wildspire Waste"}],
				weaknesses:[{element:"fire",stars:1,condition:null},{element:"poison",stars:1,condition:null}],
			},
			searchQuery:'',
			monster: ""
		}
		this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearchQueryChange(e) {
		this.setState({searchQuery: e.target.value});
	}

	onSearch() {
		this.setState({monster: this.state.searchQuery});
	}

	componentDidUpdate() {
		if(this.state.monster !== this.state.initial.name) {
			this.getMonster(this.state.monster);
		}
	}

	getMonster(keyword) {
		fetch('https://mhw-db.com/monsters')
		.then(response => response.json())
		.then(monsters => {
			const monsterIndex = monsters.map(function (e) {
				return e.name;
			}).indexOf(keyword);
			if(monsterIndex !== -1) {
				this.setState({initial: monsters[monsterIndex]});
			}
		}).catch(error => {
			console.log(error);
		}) 
	}

	render() {
		const {initial} = this.state;
		const {searchQuery} = this.state;

		return(
			<div className='home-page'>
				<div className='header'>
					<h2>Monster Manual</h2>
				</div>
				<div className='main'>
					<div className='menu'>
						<SearchBar searchQuery={searchQuery} onChange={this.onSearchQueryChange} search={this.onSearch} />
					</div>
					<MyComponent monster={initial} className='my-component-img'/>
				</div>
			</div>
		);
	}
}

export default HomePage;
