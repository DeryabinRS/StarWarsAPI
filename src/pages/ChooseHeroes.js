import SWService from '../service/SWService'

export const ChooseHeroes = () => {

	const SW = new SWService();

	SW.getAllCharacters('j').then(res => console.log(res.results))

	return (
		<div>
			ChooseHeroes
		</div>
	)
}