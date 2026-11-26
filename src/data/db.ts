import { Dexie, type Table } from 'dexie';

import { type Image } from './Image';

export class ImgLoader extends Dexie {
  images!: Table<Image, '++id'>;

  constructor() {
    super('ImgLoader');
    this.version(1).stores({
      images: '++id, name, &uid',
    });
  }

  deleteList(imgId: number) {
    return this.transaction('rw', this.images, () => {
      this.images.where({ imgId }).delete();
    });
  }
}

export const db = new ImgLoader();

export function resetDatabase() {
  return db.transaction('rw', db.images, async () => {
    await Promise.all(db.tables.map((table) => table.clear()));
  });
}
