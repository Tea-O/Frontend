const getNewObjWithPrototype = (obj) => {
    return {
        __proto__: obj
    };
}
const getEmptyObj = () => {
    return Object.create(null);
}
// 3
const setPrototypeChain = ({programmer, student, teacher, person}) => {
    programmer.__proto__ = student;
    student.__proto__ = teacher;
    teacher.__proto__ = person;
}

// 4
const getObjWithEnumerableProperty = () => {
    return Object.create(null, {
        name: {
            value: 'Alex',
        },
        age: {
            enumerable: true,
            value: 18,
        },
        work: {
            value: 'empty',
        },
    });
}

// 5
const getWelcomeObject = (person) => {
    return  Object.create(person, {
        voice: {
            value: function () {
                return `Hello, my name is ${person.name}. I am ${person.age}.`;
            }
        }
    });
}
// 6
class Singleton {
    constructor(id) {
        if(Singleton.instance) {
            return Singleton.instance
        }
        this.id = id
        Singleton.instance = this
    }
}

// 7
Number.prototype.times = function(callback) {
    for (let i = 1; i <= this; i++) {
        callback(i, this);
    }
};

const defineTimes = () => {
    Number.prototype.times = function(callback) {
        for (let i = 1; i <= this; i++) {
            callback(i, this);
        }
    };
};

// Пример использования
const defineUniq = () => {
    Object.defineProperty(Array.prototype, 'uniq', {
        get: function () {
            return [...new Set(this)]
        }
    })
}
defineUniq();
const arr = [1,2,2];

console.log(arr.uniq); // [1,2];
console.log(arr); // [1,2,2];
const count = 5;

count.times((index, value) => console.log(index, value));
// Выведет:
// 1, 5
// 2, 5
// 3, 5
// 4, 5
// 5, 5


// 8


// 9
const defineUniqSelf = () => {
    Object.defineProperty(Array.prototype, 'uniqSelf', {
        get: function() {
            const arr = [...new Set(this)]
            this.length = 0
            this.push(...arr)
            return this;
        }
    });
}
defineUniqSelf()
console.log(arr.uniqSelf); // [1,2];
console.log(arr);

module.exports = {
    getNewObjWithPrototype,
    getEmptyObj,
    setPrototypeChain,
    getObjWithEnumerableProperty,
    getWelcomeObject,
    Singleton,
    defineTimes,
    defineUniq,
    defineUniqSelf,
}