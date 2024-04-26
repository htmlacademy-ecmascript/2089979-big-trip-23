import ListFilterView from './view/list-filter-view.js';
import PagePresenter from './presenter/page-presenter.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-body__page-main');
const pagePresenter = new PagePresenter({pageContainer: siteMainElement});

render(new ListFilterView(), siteHeaderElement);
pagePresenter.init();
