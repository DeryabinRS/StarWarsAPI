import { useEffect, useState } from 'react';
import { Card} from 'react-bootstrap';
import styles from './Character.module.css'
import { ChooseBtn } from './ChooseBtn/ChooseBtn';
import SWService from '../../service/SWService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMarsStroke } from '@fortawesome/free-solid-svg-icons'

export const Character = ({data, onChooseChar, del}) => {
	const SW = new SWService();

	const [home, sethome] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		HomeWorld(data.homeworld);
	},[])// eslint-disable-line react-hooks/exhaustive-deps

	const HomeWorld = async (url) => {
		sethome(await SW.getHomeworld(url));
		setLoading(false)
	}

	return(
		<Card className={styles.character}>
			<Card.Img variant="top" src={data.img} alt={data.name} className="img-fluid" width={213} height={293}/>
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>
					{loading ? (
						<span><FontAwesomeIcon icon={faGlobe} spin/> Loading</span>
					) : (
						<span><FontAwesomeIcon icon={faGlobe} /> {home.name}</span>
					)}
					<br/><FontAwesomeIcon icon={faMarsStroke} /> {data.gender}
				</Card.Text>
				<ChooseBtn data={data} onChooseChar={onChooseChar} del={del}/>
			</Card.Body>
		</Card>
	)
};