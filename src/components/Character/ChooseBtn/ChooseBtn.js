import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './ChooseBtn.module.css';

export const ChooseBtn = ({data, onChooseChar, del}) => {
    if(del){
        return(
            <Button block onClick={() => onChooseChar(data)} variant="light">Delete hero <FontAwesomeIcon className={data.choosed ? styles.choosed: ''} icon={faTrash} /></Button>
        )
    }else{
        return(
            <Button block onClick={() => onChooseChar(data)} variant="light">Choose hero <FontAwesomeIcon className={data.choosed ? styles.choosed: ''} icon={faHeart} /></Button>
        )
    }
}    