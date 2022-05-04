import React from 'react';
import style from './SearchBar.module.scss';

const SearchBar = () => {
	 return(
		 <div className={style.Container}>
		 <label>Monster Name</label>
		 	<input type='text' placeholder='Search' className={style.Input}></input>
			<label>Monster Species</label>
			<select className={style.Select}>
				<option>All </option>
				<option>Dragon </option>
				<option>Orc </option>
			</select>
			<label>Location</label>
			<select className={style.Select}>
				<option>All </option>
				<option>Forest </option>
				<option>Mountain </option>
			</select>
			<button type='submit' className={style.Button}>Search</button>
			<div className={style.ResultList}>
				Search Results:
			</div>
		 </div>
	 )
}
export default SearchBar;
