import { siteMenuTemplate } from './view/menu.js';
import { siteInformationTemplate } from './view/information.js';
import { siteFilterTemplate } from './view/filter.js';
import { siteSortTemplate } from './view/sort.js';
import { siteEventListTemplate } from './view/event-list.js';
import { siteAddEventFormTemplate } from './view/add-event-form.js';
import { siteEditEventFormTemplate  } from './view/edit-event-form.js';
import { siteTripPointTemplate } from './view/trip-point.js';

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripControlNavigationElement = document.querySelector('.trip-controls__navigation');
const siteTripMainElement = document.querySelector('.trip-main');
const siteTripFilterElement = document.querySelector('.trip-controls__filters');
const siteTripEventElement = document.querySelector('.trip-events');

render(siteTripControlNavigationElement, siteMenuTemplate(), 'beforeend');
render(siteTripMainElement, siteInformationTemplate(), 'afterbegin');
render(siteTripFilterElement, siteFilterTemplate(), 'beforeend');
render(siteTripEventElement, siteSortTemplate(), 'beforeend');
render(siteTripEventElement, siteEventListTemplate(), 'beforeend');

const siteEventListElement = document.querySelector('.trip-events__list');

render(siteEventListElement, siteEditEventFormTemplate(), 'afterbegin');
render(siteEventListElement, siteAddEventFormTemplate(), 'beforebegin');

for (let index = 0; index < POINT_COUNT; index++) {
  render(siteEventListElement, siteTripPointTemplate(), 'beforeend');
}

