import {render} from '../render.js';
import EditPointView from '../view/edit-point-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EventPointView from '../view/event-point-view.js';

export default class EventPresenter {
  constructor({headerContainer, mainContainer, eventPointModel}) {
    this.headerContainer = headerContainer;
    this.mainContainer = mainContainer;
    this.eventPointModel = eventPointModel;
  }

  init() {
    this.eventPoints = [...this.eventPointModel.getEventPoints()];

    const filter = new FilterView();
    render(filter, this.headerContainer);

    const sort = new SortView();
    render(sort, this.mainContainer);

    const editPoint = new EditPointView({
      eventPoint: this.eventPoints[0],
      offersType: this.eventPointModel.getOffersByType(this.eventPoints[0].type),
      offers: [...this.eventPointModel.getOffersById(this.eventPoints[0].type, this.eventPoints[0].offersId)],
      destination: this.eventPointModel.getDestinationsById(this.eventPoints[0].destination),
      destinationAll: this.eventPointModel.getDestinations(),
    });
    render(editPoint, this.mainContainer);

    for (let i = 0; i < this.eventPoints.length; i++) {
      const eventPoint = new EventPointView({
        eventPoint: this.eventPoints[i],
        offers: [...this.eventPointModel.getOffersById(this.eventPoints[i].type, this.eventPoints[i].offersId)],
        destination: this.eventPointModel.getDestinationsById(this.eventPoints[i].destination),
      });

      render(eventPoint, this.mainContainer);
    }
  }
}
