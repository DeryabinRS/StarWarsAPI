import { Card , Button} from 'react-bootstrap';
import styles from './Character.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
//import SWService from '../../service/SWService'

export const Character = ({data, onChooseChar}) => {

	//const SW = new SWService();
	//const initialLS = localStorage.getItem("chars");
	const [charData, setCharData] = useState(data)


	const chooseButton = () => {
		return(
			<Button block onClick={() => onChooseChar(charData)} variant="light">Choose hero <FontAwesomeIcon className={charData.choosed ? styles.choosed: ''} icon={faHeart} /></Button>
		)
	}

	return(
		<Card className={styles.character}>
			<Card.Img variant="top" src={data.img} alt={data.name} className="img-fluid"/>
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>

				</Card.Text>
				{chooseButton()}
			</Card.Body>
		</Card>
	)
};