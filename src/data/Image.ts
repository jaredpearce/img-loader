export interface Image {
  id?: string; // assigned by indexedDB
  imageData: File | Blob; // stored but not indexed!
  src?: string;

  uid?: string; // should be UUID
  name: string;
  lastModified: number | Date;
  size: number;
  type: 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/gif';
  webkitRelativePath?: string;
}
