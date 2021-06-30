import { useEffect, useState, useCallback } from 'react';
import SWService from '../service/SWService'
import {Container} from 'react-bootstrap'
import { Character } from '../components/Character/Character';

export const ChooseHeroes = () => {

	const SW = new SWService();

	const startPage = 1;
	
	const [page, setPage] = useState({current:startPage, nextPage:null, prevPage:null});
	const [loading, setLoading] = useState(true);
	const [listHeroes, setListHeroes] = useState([]);
	
	useEffect(() => {
    	const fetchData = async (page) => {
			let response = await SW.getAllCharacters(page);
			setListHeroes(response.results);
			console.log(response)
			return response;
		}

		fetchData(startPage)
		//console.log(listHeroes)
  	}, [])

	useEffect(() => {
		getChars(listHeroes);
	},[listHeroes])

	const getChars = (arr) => {
		console.log(arr)
	}

	return (
		<div>
			<Container className="mt-4">
				
			</Container>
		</div>
	)
}