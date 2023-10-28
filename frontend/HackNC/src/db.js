// db.js
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  items: '++id, rawName, generalName, store, date', // Primary key and indexed props
});

db.items.add({
    id: 1,
    generalName: "Robbei",
    store: "FoodLion"
});
