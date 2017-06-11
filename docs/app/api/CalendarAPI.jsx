var axios = require('axios')

const CALENDAR_URL = 'http://128.199.53.150/';

//019d7a317e59190722836e4622672162

module.exports = {
    getEvents: function () {
        var requestUrl = `${CALENDAR_URL}events`;

        return axios.get(requestUrl)
    }
}
