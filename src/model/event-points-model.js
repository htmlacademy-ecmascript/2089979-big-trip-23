import {getRandomEventPoints} from '../mock/event-points.js';

const EVENT_COUNT = 3;

export default class EventPointsModel {
  points = Array.from({length: EVENT_COUNT}, getRandomEventPoints);

  getPoints() {
    return this.points;
  }
}
