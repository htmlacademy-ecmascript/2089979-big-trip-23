import ListSortView from '../view/list-sort-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventsItemView from '../view/trip-events-item-view.js';
import EditPointView from '../view/edit-point-view.js';
import EventView from '../view/event-view.js';
import {render} from '../render.js';

export default class PagePresenter {
  tripEventsComponent = document.querySelector('.trip-events');
  tripEventsListComponent = new TripEventsListView();

  constructor({pageContainer, eventPointsModel}) {
    this.pageContainer = pageContainer;
    this.eventPointsModel = eventPointsModel;
  }

  init() {
    this.pageEventPoints = [...this.eventPointsModel.getPoints()];
    render(new ListSortView(), this.tripEventsComponent);
    render(this.tripEventsListComponent, this.tripEventsComponent);

    for (let i = 0; i < this.pageEventPoints.length; i++) {
      render(this.tripEventsItemComponent = new TripEventsItemView({point: this.pageEventPoints[i]}), this.tripEventsListComponent.getElement());
      if (i === 0) {
        render(this.editPointComponent = new EditPointView(), this.tripEventsItemComponent.getElement());
      } else {
        render(this.eventComponent = new EventView(), this.tripEventsItemComponent.getElement());
      }
    }
  }
}
