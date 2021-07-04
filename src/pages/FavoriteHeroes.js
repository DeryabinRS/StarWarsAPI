import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Character } from '../components/Character/Character';
import styles from './Pages.module.css'

export const FavoriteHeroes = () => {

	const [charsLS, setCharsLS] = useState(
		JSON.parse(localStorage.getItem('chars')) || []
	);
	const [gender, setGender] = useState('All');

	useEffect(() => {
		console.log(gender)
	},[gender])

	useEffect(() => {
		localStorage.setItem("chars", JSON.stringify(charsLS));
  	}, [charsLS]);

	const delFavoriteHeroes = (charData) => {
		if(charData.choosed){
			const newCharLS = charsLS.filter(item => item.id !== charData.id);
			setCharsLS(newCharLS);
		}
	}

	if(charsLS.length > 0){
		return (
			<Container className="mt-4">
				<Button variant="light" onClick={() => setGender('All')} className="mr-2 mb-3">All</Button>
				<Button variant="light" onClick={() => setGender('Male')} className="mr-2 mb-3">Male</Button>
				<Button variant="light" onClick={() => setGender('Female')} className="mr-2 mb-3">Female</Button>
				<div className={styles.chars_block}>
					{charsLS.map((item, i) => {
						return <Character key={i} data={item} del={true} onChooseChar={delFavoriteHeroes}/>
					})}
				</div>
			</Container>
		)
	}else{
		return (
			<Container className="mt-4">
				<div style={{color:'white'}}>
					Empty favorite lits
				</div>
			</Container>
		)
	}
}