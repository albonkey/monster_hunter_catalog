import React from 'react';
import './MyComponent.scss';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			monster: props.monster
		};
	}

	render() {
		const {monster} = this.state;
		
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
						<div className='info-header'>Protection</div>
						<div className='info-text'>
							{
								monster.resistances.map(protection => {
									return <div>
														<div className='info-underheader'>{protection.name}</div>
														<div>{protection.description}</div>
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
}
export default MyComponent;
