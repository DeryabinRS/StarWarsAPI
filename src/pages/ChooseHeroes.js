import { useEffect, useState, useCallback } from 'react';
import SWService from '../service/SWService'

export const ChooseHeroes = () => {

	const SW = new SWService();

	const [pageHeroes, setPageHeroes] = useState({current:1, nextPage:null, prevPage:null});
	const [listHeroes, setListHeroes] = useState([]);

	const fetchMyAPI = async () => {
    	let response = await SW.getAllCharacters();
    	setPageHeroes({nextPage:response.next, prevPage:response.previouse})
		setListHeroes(response)
		console.log(listHeroes)
  	}

	
	fetchMyAPI()
  	

	

	return (
		<div>
			ChooseHeroes
		</div>
	)
}