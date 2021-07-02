import { useEffect, useState} from 'react';
import SWService from '../service/SWService'
import {Container} from 'react-bootstrap'
import { Character } from '../components/Character/Character';
import styles from './Pages.module.css'
import { Button } from 'react-bootstrap';
import { Loader } from '../components/Loader/Loader';

export const ChooseHeroes = () => {

	const SW = new SWService();

	let startPage = 1;
	
	const [page, setPage] = useState({current:startPage, nextPage:null, prevPage:null});
	const [loading, setLoading] = useState(true);
	const [listHeroes, setListHeroes] = useState([]);

	const [charsLS, setCharsLS] = useState(
	JSON.parse(localStorage.getItem('chars')) || []
	)

	useEffect(() => {
		localStorage.setItem("chars", JSON.stringify(charsLS));
  	}, [charsLS]);

	const onChooseChar = (charData) => {
		console.log(charData);
		if(!charData.choosed){
			setCharsLS(() => [...charsLS, charData]);
		}else{
			const newCharLS = charsLS.filter(item => item.id !== charData.id);
			setCharsLS(newCharLS);
		}
		const newListHeroes = listHeroes.map(item => {
			if(item.id === charData.id){
				item.choosed = !charData.choosed;
			}
			return item;
		})
		setListHeroes(newListHeroes);
		console.log(listHeroes);
	}

	const fetchData = async (page) => {
		let response = await SW.getAllCharacters(page);
		setPage({
			current:page,
			nextPage:response.next,
			prevPage:response.previous
		})
		
		setListHeroes(setNewParam(response.results));
		setLoading(false);
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
		const newData = data.map((item) => {
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
		setLoading(true);
		fetchData(num);
		console.log(page)
	}  

	const Pagination = () => {
		return(
			<div className="text-center mt-2 pb-3">
					{page.prevPage ? <Button className="mr-1" onClick={() => onClickPageHandler(page.current - 1)} variant="light">Prev</Button>: ''}
					{page.nextPage ? <Button onClick={() => onClickPageHandler(page.current + 1)} variant="light">Next</Button>: ''}
			</div>
		)
	}

	if(loading){
		return(
			<Loader/>
		)
	}else{
	return (

			<Container className="mt-4">
				{Pagination()}
				<div className={styles.chars_block}>
				{listHeroes.map((item, i) => {
					return <Character key={i} data={item} onChooseChar={onChooseChar}/>
				})}
				</div>
				{Pagination()}
			</Container>

	)
			}
}