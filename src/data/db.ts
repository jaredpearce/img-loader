import { Dexie, type EntityTable } from "dexie"

import { type Image } from './Image';

const db = new Dexie("ImageListDatabase") as Dexie & {
    images: EntityTable<
    Image,
    "id" // primary key "id" (for the typings only)
    >
}

// Schema declaration:
db.version(1).stores({
    images: "++id, fileName, lastModified, type", // Primary key and indexed props
});

export { db }
