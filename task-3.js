const findBestEmployee = function (employees) {
    const props = Object.entries(employees)
    
    let bestEmployee = props[0][0];
    let bestResult = props[0][1];

    for (let i = 0; i < props.length; i += 1) {
        if (bestResult < props[i][1]) {
            bestEmployee = props[i][0]
        }
    }
    return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux