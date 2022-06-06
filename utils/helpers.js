const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

module.exports = {
  format_username: (username= "your" ) => {
    const updated_usename = username.split('');
    updated_usename[0] = updated_usename[0].toUpperCase();
    return updated_usename.join('');
  },

  formatDate: (createdAtVal) => {
    return dayjs(createdAtVal).format('lll');
  },
};
