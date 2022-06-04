module.exports = {
  format_username: (username) => {
    const updated_usename = username.split('');
    updated_usename[0] = updated_usename[0].toUpperCase();
    return updated_usename.join('');
  },
};
