import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import Search from './script/models/Search.js';
import * as searchView from './script/views/searchView.js';
import { elements } from './script/views/base.js';

const state = {};

const controlSearch = async () => {
	const query = searchView.getInput();
	console.log(query);

	if (query) {
		state.search = new Search(query);

		searchView.clearResults();

		await state.search.getResult();

		searchView.renderResult(state.search.result);
	}
};

elements.searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	controlSearch();
});
