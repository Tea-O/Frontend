function makePotionsRoom(key, value) {
    const storage = {
        // хранилище кладовки
        store: new Map(),

        // добавляет зелье на указанную полку, метод ничего не возвращает
        add: function (shelveName, potion) {
            if (!this.store.has(shelveName)) {
                this.store.set(shelveName, []);
            }
            this.store.get(shelveName).push(potion);
        },

        // Возвращает зелье, если оно есть на любой из полок. Зелье убирается из кладовки (с любой из полок, где есть зелье)
        takePotion: function (namePotion) {
            for (let amount of this.store.values()) {
                for (let i = 0; i < amount.length; i++) {
                    if (amount[i].name === namePotion) {
                        return amount.splice(i, 1)[0];
                    }
                }
            }
            return null;
        },

        // Использует зелье (вызывая у него функцию "use"). Зелье убирается из кладовки (с любой из полок, где есть зелье).
        usePotion: function (namePotion) {
            let ans = this.takePotion(namePotion);
            if (ans) {
                ans.use();
            }
        },

        // Возвращает все зелья с полки. Содержимое полки не меняется
        getAllPotionsFromShelve: function (shelveName) {
            if (this.store.has(shelveName)) {
                return [...(this.store.get(shelveName))];
            }
            return [];
        },

        // Возвращает все зелья кладовки. Содержимое полок не меняется
        getAllPotions: function () {
            let ans = [];
            for (let amount of this.store.values()) {
                ans = ans.concat(amount);
            }
            return ans;
        },

        // Возвращает все зелья с полки. Полка остается пустой
        takeAllPotionsFromShelve: function (shelveName) {
            let ans = [];
            if (this.store.has(shelveName)) {
                ans = this.store.get(shelveName);
                this.store.set(shelveName, []);

            }
            return ans;
        },

        // Использует все зелья с указанной полки. Полка остается пустой
        useAllPotionsFromShelve: function (shelveName) {
            if (this.store.has(shelveName)) {
                let potionsArr = this.takeAllPotionsFromShelve(shelveName);
                for (const potion of potionsArr) {
                    potion.use();
                }
            }
        },

        // Возвращает зелья с истекшим сроком хранения. Метод убирает такие зелья из кладовки.
        // revisionDay - день, в который происходит проверка сроков хранения
        clean: function (revisionDay) {
            let revisionPotion = [];
            for (let amount of this.store.values()) {
                for (let i = 0; i < amount.length; i++) {
                    if (amount[i].created.getDate() + amount[i].expirationDays > revisionDay.getDate()) {
                        revisionPotion.push(amount[i]);
                        amount.splice(i, 1);
                    }
                }
            }
            return revisionPotion;
        },

        // возвращает число - сколько уникальных зелий находится в кладовке
        uniquePotionsCount() {
            let tmp = new Set();
            let allPotion = this.getAllPotions();
            for (const elem of allPotion) {
                tmp.add(elem.name);
            }
            return tmp.size;
        }
    };
    return storage;

}

module.exports = makePotionsRoom;


module.exports = makePotionsRoom;
const potion = {
    name: 'Амортенция',
    expirationDays: 4,
    created: new Date(2023, 0, 1),
    use: function () {
        console.log('Использован любовный напиток');
    }
}
const potionsRoom = makePotionsRoom();

module.exports = makePotionsRoom;
const potion1 = {
    name: 'Амортенция',
    expirationDays: 5,
    created: new Date(2023, 0, 1),
    use: function () {
        console.log('Использован любовный напиток');
    }
}


potionsRoom.add('Дальняя полка', potion);
potionsRoom.add('Дальняя полка', potion1);
console.log(potionsRoom.uniquePotionsCount()); // 1;
//console.log(potionsRoom.takePotion('Амортенция'));
console.log(potionsRoom.getAllPotionsFromShelve('Дальняя полка'));

potionsRoom. useAllPotionsFromShelve('Дальняя полка');
// Использован любовный напиток
console.log(potionsRoom.uniquePotionsCount()); // 0;
console.log(potionsRoom.usePotion('abpba'))
