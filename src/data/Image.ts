export interface Image {
  id?: string; // assigned by indexedDB
  imageData: File | Blob; // stored by not indexed!
  imageHash?: Uint8Array; // MD5 digest

  uuid?: string; // should be UUID
  name: string;
  lastModified: number | Date;
  size: number;
  type: 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/gif';
  webkitRelativePath?: string;
}
