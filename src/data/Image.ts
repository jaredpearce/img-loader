export interface Image {
    id?: string, // assigned by indexedDB
    uuid: string; // should be UUID
    name: string, 
    lastModified: date, 
    size: number,
    type: 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/gif',
}