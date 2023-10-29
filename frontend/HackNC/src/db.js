// db.js
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
    // note time is unix time probably
    items: '++id, rawName, generalName, category, store, time, price', // Primary key and indexed props
});

db.items.add({
    id: 1,
    rawName: "raw name",
    generalName: "general name",
    store: "FoodLion1",
    time: 234234,
    price: 5,
});
db.items.add({
    id: 2,
    rawName: "raw name2",
    generalName: "general name2",
    store: "FoodLion2",
    time: 234234,
    price: 8,
});
db.items.add({
    id: 3,
    rawName: "raw name3",
    generalName: "general name3",
    store: "FoodLion33",
    time: 234234,
    price: 15,
});
