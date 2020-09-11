import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResult() {
		const key = '492672660410209e84f985cbd85dcc19';
		try {
			const res = await axios(
				`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}&page=1`
			);
			this.result = res.data.results;
			console.log(this.result);
		} catch (error) {
			alert(error);
		}
	}
}
