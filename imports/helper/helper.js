module.exports = {
  getLocalUser: () => {
    return localStorage.getItem('logSysUserId');
  },
  setLocalUser: (id) => {
    localStorage.setItem('logSysUserId', id);
  },
  removeLocalUser: () => {
    localStorage.removeItem('logSysUserId');
  }
}