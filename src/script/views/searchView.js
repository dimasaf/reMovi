import { elements } from './base.js';

export const getInput = () => elements.searchInput.value;
export const clearResults = () => (elements.resultList.innerHTML = '');

const renderMovie = (result) => {
	const markup = `
    <div class="col mb-2">
    <div class="card">
      <img class="card-img-top" style="width: 10rem" src="https://image.tmdb.org/t/p/w500/${result.poster_path}"/>
      <div class="card-body">
        <p class="card-title text-center">${result.original_title}</p>
      </div>
    </div>
    </div>
  `;
	elements.resultList.insertAdjacentHTML('beforeend', markup);
};

export const renderResult = (results) => {
	results.forEach(renderMovie);
};
