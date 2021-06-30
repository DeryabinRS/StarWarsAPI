import { Card , Button} from 'react-bootstrap';
import styles from './Character.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

console.log(styles.character)

export const Character = ({data}) => {
	console.log(data); 
	
	const urlId = data.url.match(/(\d+)/);
	const urlIMG = `https://starwars-visualguide.com/assets/img/characters/${urlId[0]}.jpg`

	return(
		<Card className={styles.character}>
			<Card.Img src={urlIMG} alt={data.name} className="img-fluid"/>
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text>
				<Button variant="light">Choose hero <FontAwesomeIcon icon={faHeart} /></Button>
			</Card.Body>
		</Card>
	)
};