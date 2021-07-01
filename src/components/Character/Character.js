import { Card , Button} from 'react-bootstrap';
import styles from './Character.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

export const Character = ({data}) => {

	const [charData, setCharData] = useState(data)
	
	useEffect(() => {
		let arrCharsLS = [];
		if (!localStorage.hasOwnProperty('chars')) {
			localStorage.setItem('chars', JSON.stringify(arrCharsLS));
		}else{
			if(charData.choosed == true){
				console.log(charData.choosed);
				arrCharsLS = JSON.parse(localStorage.getItem('chars'));
				if(arrCharsLS.length !== 0){
					
				}
			}
			//console.log(charData.choosed);
			// const newArrChars = arrCharsLS.map(item => {
			// 	console.log(charData.choosed);
			// 	if(item.id === charData.id && charData.choosed == true){
					
			// 		item = charData;
			// 	}
			// 	return item;
			// })
			// console.log(newArrChars);
			// localStorage.setItem('chars', JSON.stringify(newArrChars));
		}
		//console.log(charData);
	},[charData])

	const onChooseChar = () => {
		setCharData(prevState => ({
			...prevState, 
			choosed: !prevState.choosed
		}))
	}

	return(
		<Card className={styles.character}>
			<Card.Img variant="top" src={data.img} alt={data.name} className="img-fluid"/>
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text>
				<Button onClick={onChooseChar} variant="light">Choose hero <FontAwesomeIcon icon={faHeart} /></Button>
			</Card.Body>
		</Card>
	)
};