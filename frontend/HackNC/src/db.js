// db.js
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
    // note time is unix time probably
    items: '++id, rawName, generalName, category, store, time, price', // Primary key and indexed props
});
