import styles from './Character.module.css'

export const Character = ({data}) => {
	//const {data} = props; 
	console.log(data)
	return(
		<div className={styles.Character}>
			<div>{data.name}</div>
		</div>
	)
};