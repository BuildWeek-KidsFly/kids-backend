module.exports = {
  assignConnection
};

function assignConnection(contractors) {
  const index = Math.floor(Math.random() * contractors.length);
  return contractors[index];
}
