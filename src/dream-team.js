const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = "";
  if (Array.isArray(members)) {
    for (let item of members) {
      if (typeof item === "string") {
        item = item.trim();
        str += item[0].toUpperCase();
      }
    }
  }

  if (str) {
    return (str = [...str].sort((a, b) => a.localeCompare(b)).join(""));
  } else return false;
}

module.exports = {
  createDreamTeam,
};
