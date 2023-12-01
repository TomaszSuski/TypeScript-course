"use strict";
// w tsx nie ma problemu z taką definicją funkcji i nawiasem strzałkowym okreslającym typ
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}
// jednak w przypadku funkcji strzałkowych już tak
// trzeba dodac przecinek po nazwie typu!
const getRandomElement2 = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};
getRandomElement2(["a", "b"]);
