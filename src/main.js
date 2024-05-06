import EventPresenter from './presenter/event-presenter.js';
import EventPointModel from './model/event-point-model.js';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const eventPointModel = new EventPointModel();

const presenter = new EventPresenter({headerContainer: siteFilterElement, mainContainer: siteMainElement, eventPointModel});
presenter.init();
