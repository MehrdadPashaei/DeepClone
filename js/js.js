
const objects = {
    name: 'mehrdad',
    age: 32,
    address: {
        street: 'emam Main St',
        city: 'Hamedan',
        state: 'CA',
        countries: [
            'iran',
            'pakistan',
            'turkey',
            {
                key: 'MyTarget'
            }
        ]
    }
};

function deepClone(obj) {

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let clone = {};

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            clone[prop] = deepClone(obj[prop]);
        }
    }

    return clone;
}

console.log(deepClone(objects));



