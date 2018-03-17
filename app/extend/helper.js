const moment = require('moment');
const md5 = require('md5')

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.encryption = (password) => {
    return md5(password+app.config.salt);
}