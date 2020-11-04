import axios from "axios";

const API_URL = "http://localhost:8081";

function getLogList(placeName, success, fail) {
  axios.get(API_URL+'/log/getLogList', {
    params: {
        placeName: placeName
    }
  })
    .then(success)
    .catch(fail);
}

function getLogPeriod(placeName, startDate, endDate, success, fail) {
    axios.get(API_URL+'/log/getLogPeriod', {
      params: {
          placeName: placeName,
          startDate: startDate,
          endDate: endDate
      }
    })
      .then(success)
      .catch(fail);
}

export { getLogList,getLogPeriod };