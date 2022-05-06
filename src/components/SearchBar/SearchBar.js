import React, {useState} from 'react';
import style from './SearchBar.module.scss';

const SearchBar = ({searchHandler}) => {
	const [name, setName] = useState('');
	const [species, setSpecies] = useState('');
	const [location, setLocation] = useState('');

	const onSearch = (e) => {
		e.preventDefault();
		searchHandler(name, species, location);
	}
	 return(
		 <div className={style.Container}>
		 <label>Monster Name</label>
		 	<input type='text' placeholder='Search' className={style.Input} onChange={(e) => setName(e.target.value)}></input>
			<label>Monster Species</label>
			<select className={style.Select} onChange={(e) => setSpecies(e.target.value)}>
				<option value=''>All </option>
				<option value='herbivore'>Herbivore </option>
				<option value='wingdrake'>Wingdrake</option>
				<option value='neopteron'>Neopteron</option>
				<option value='fish'>Fish</option>
				<option value='elder dragon'>Elder Dragon</option>
			</select>

			<button type='submit' className={style.Button} onClick={onSearch}>Search</button>
		 </div>
	 )
}
export default SearchBar;
