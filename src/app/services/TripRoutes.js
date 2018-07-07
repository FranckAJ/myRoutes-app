import httpClient from './../helpers/axios';

/**
 *
 */
class TripRoutesService {

  constructor() {
  }

  /**
   * @param from
   * @param to
   * @param tripDate
   * @returns {*}
   */
  getTrips(from, to, tripDate) {
    let params = {
      from: from,
      to: to,
      tripDate: tripDate
    }
    return httpClient.get('/trip', params)

  }
}

export default new TripRoutesService();
