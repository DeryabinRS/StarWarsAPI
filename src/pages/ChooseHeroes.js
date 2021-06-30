import { useEffect, useState} from 'react';
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
			setPage({
				current:page,
				nextPage:response.next,
				prevPage:response.reviouse
			})
			setListHeroes(response.results);
			return response;
		}

		fetchData(startPage)
  	}, [])

	useEffect(() => {
		//getChars(listHeroes);
		//console.log(page)
	},[listHeroes])

	// let getChars = (arr) => {
	// 	console.log(arr)
	// 	if(!arr || arr.length === 0 || arr === undefined){
	// 		return 'Загрузка данных';
	// 	}else{
	// 		return arr.map((item,i) => {

	// 		})
	// 	}
	// }

	return (

			<Container className="mt-4">
				{listHeroes.map((item, i) => {
					return <Character key={i} data={item}/>
				})}
			</Container>

	)
}