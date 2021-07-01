import { Card , Button} from 'react-bootstrap';
import styles from './Character.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

export const Character = ({data}) => {

	const [charData, setCharData] = useState(data)
	//const [charsLocal, setCharsLocal] = useState([]);

	useEffect(() => {
		//console.log('Updated');
		const arrNewChoose = [];
		const arrCharsLS = JSON.parse(localStorage.getItem('chars'));
		if(arrCharsLS && arrCharsLS.length > 0){
			for(let i = 0; i < arrCharsLS.length; i++){
				if(arrCharsLS[i].id === charData.id){
					if(!charData.choosed){
						arrCharsLS.splice(i,1);
						localStorage.setItem('chars', JSON.stringify(arrCharsLS));
						break;
					}
				}else{
					if(charData.choosed){
						arrCharsLS.push(charData);
						localStorage.setItem('chars', JSON.stringify(arrCharsLS));
						break;
					}
				}
			}
		}else{
			//localStorage.setItem('chars', JSON.stringify([]));
			if(charData.choosed){
				arrCharsLS.push(charData);
				localStorage.setItem('chars', JSON.stringify(arrCharsLS));
			}
		}
	},[charData])

	const onChooseChar = () => {
		setCharData(prevState => ({
			...prevState, 
			choosed: !prevState.choosed
		}))
	}

	const chooseButton = () => {
		return(
			<Button onClick={onChooseChar} variant="light">Choose hero <FontAwesomeIcon className={charData.choosed ? styles.choosed: ''} icon={faHeart} /></Button>
		)
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
				{chooseButton()}
			</Card.Body>
		</Card>
	)
};