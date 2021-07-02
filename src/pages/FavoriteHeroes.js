import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Character } from '../components/Character/Character';
import styles from './Pages.module.css'

export const FavoriteHeroes = () => {

	const [charsLS, setCharsLS] = useState(
		JSON.parse(localStorage.getItem('chars')) || []
	);

	useEffect(() => {
		localStorage.setItem("chars", JSON.stringify(charsLS));
  	}, [charsLS]);

	const getFavoriteHeroes = () => {

	}

	return (
		<Container className="mt-4">
			<div className={styles.chars_block}>
				{charsLS.map((item, i) => {
					return <Character key={i} data={item} del={true}/>
				})}
			</div>
		</Container>
	)
}