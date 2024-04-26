import ListFilterView from './view/list-filter-view.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');

render(new ListFilterView(), siteHeaderElement);
