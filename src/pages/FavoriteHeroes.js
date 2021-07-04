import { ButtonGroup, Button } from 'react-bootstrap';
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
		localStorage.setItem("chars", JSON.stringify(charsLS));
  	}, [charsLS]);

	const delFavoriteHeroes = (charData) => {
		if(charData.choosed){
			const newCharLS = charsLS.filter(item => item.id !== charData.id);
			setCharsLS(newCharLS);
		}
	}

	const onHandlerGender = (val) => {
		const g = val.props.data.gender;
		if(g === gender || gender === 'All') return val;
	}

	if(charsLS.length > 0){
		return (
			<Container className="mt-4">
				<ButtonGroup aria-label="Basic example" className="mb-3">
					<Button variant="secondary" onClick={() => setGender('All')}>All</Button>
					<Button variant="secondary" onClick={() => setGender('male')}>Male</Button>
					<Button variant="secondary" onClick={() => setGender('female')}>Female</Button>
					<Button variant="secondary" onClick={() => setGender('n/a')}>n/a</Button>
				</ButtonGroup>
				<div className={styles.chars_block}>
					{
					charsLS.map((item, i) => {
						return <Character key={i} data={item} del={true} onChooseChar={delFavoriteHeroes}/>
					}).filter(onHandlerGender)
					}
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