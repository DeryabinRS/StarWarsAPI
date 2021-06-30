import { useEffect, useState} from 'react';
import SWService from '../service/SWService'
import {Container} from 'react-bootstrap'
import { Character } from '../components/Character/Character';
import styles from './Pages.module.css'
import { Button } from 'react-bootstrap';

export const ChooseHeroes = () => {

	const SW = new SWService();

	let startPage = 1;
	
	const [page, setPage] = useState({current:startPage, nextPage:null, prevPage:null});
	const [loading, setLoading] = useState(true);
	const [listHeroes, setListHeroes] = useState([]);
	

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

	useEffect(() => {
		fetchData(page.current);
  	}, [])

	return (

			<Container className="mt-4">
				<div className={styles.chars_block}>
				{listHeroes.map((item, i) => {
					return <Character key={i} data={item}/>
				})}
				</div>
				<div className="text-center">
					{page.prevPage ? <Button onClick={() => setPage(page.current - 1)} variant="light">Prev</Button>: ''}
					{page.nextPage ? <Button onClick={() => setPage(page.current + 1)} variant="light">Next</Button>: ''}
				</div>
			</Container>

	)
}