import { openDB, DBSchema } from 'idb';

import { Image } from './Image';
interface ImgDB extends DBSchema {
  images: Image[];
  //   'favourite-number': {
  //     key: string;
  //     value: number;
  //   };
  //   products: {
  //     value: {
  //       name: string;
  //       price: number;
  //       productCode: string;
  //     };
  //     key: string;
  //     indexes: { 'by-price': number };
  //   };
}

const DB_NAME = 'images';
const DB_VERSION = 1;

import { openDB } from 'idb';

async function createStoreInDB() {
  const dbPromise = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('images')) {
        db.createObjectStore('images', { keyPath: 'id', autoIncrement: true });

        images.createIndex('name', 'name', { unique: false });
        images.createIndex('uuid', 'uuid', { unique: true });
      }
    },
  });
}

createStoreInDB();
