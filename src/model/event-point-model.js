import {getRandomEventPoint, mockDestination, mockOptions} from '../mock/event-point.js';

const EVENT_POINT_COUNT = 3;

export default class EventPointModel {
  eventPoints = Array.from({length: EVENT_POINT_COUNT}, getRandomEventPoint);
  offers = mockOptions;
  destination = mockDestination;

  getEventPoints() {
    return structuredClone(this.eventPoints);
  }

  getOffers() {
    return structuredClone(this.offers);
  }

  getOffersByType(type) {
    const allOffers = this.getOffers();
    return allOffers.find((offer) => offer.type === type);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }

  getDestinations() {
    return structuredClone(this.destination);
  }

  getDestinationsById(id) {
    const allDestination = this.getDestinations();
    return allDestination.find((item) => item.id === id);
  }
}
