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
			prevPage:response.previous
		})
		
		setListHeroes(setNewParam(response.results));
		return response;
	}

	const getLSCoosedChar = (urlId) => {
		const arrCharsLS = JSON.parse(localStorage.getItem('chars'));
		let choosed = false;
		if(arrCharsLS && arrCharsLS.length !== 0){
			arrCharsLS.forEach(item => {
				if(item.id === urlId){
					choosed = true;
				}
			})
		}
		return choosed;
	}

	const setNewParam = (data) => {
		const newData = data.map(item => {
			const urlId = item.url.match(/(\d+)/);
			const urlIMG = `https://starwars-visualguide.com/assets/img/characters/${urlId[0]}.jpg`;
			item.id = urlId[0];
			item.img = urlIMG;
			item.choosed = getLSCoosedChar(urlId[0]);
			return item;
		});
		//console.log(newData)
		return newData;
	}

	useEffect(() => {
		fetchData(page.current);
		
  	}, [])
	
	const onClickPageHandler = (num) => {
		fetchData(num);
		//console.log(page)
	}  

	const Pagination = () => {
		return(
			<div className="text-center mt-2 mb-2">
					{page.prevPage ? <Button onClick={() => onClickPageHandler(page.current - 1)} variant="light">Prev</Button>: ''}
					{page.nextPage ? <Button onClick={() => onClickPageHandler(page.current + 1)} variant="light">Next</Button>: ''}
			</div>
		)
	}

	return (

			<Container className="mt-4">
				{Pagination()}
				<div className={styles.chars_block}>
				{listHeroes.map((item, i) => {
					return <Character key={i} data={item}/>
				})}
				</div>
				{Pagination()}
			</Container>

	)
}