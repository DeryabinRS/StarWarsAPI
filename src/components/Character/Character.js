import { Card} from 'react-bootstrap';
import styles from './Character.module.css'
import { ChooseBtn } from './ChooseBtn/ChooseBtn';

export const Character = ({data, onChooseChar, del}) => {

	return(
		<Card className={styles.character}>
			<Card.Img variant="top" src={data.img} alt={data.name} className="img-fluid"/>
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>

				</Card.Text>
				<ChooseBtn data={data} onChooseChar={onChooseChar} del={del}/>
			</Card.Body>
		</Card>
	)
};