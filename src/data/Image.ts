export interface Image {
  id?: any; // assigned by indexedDB
  imageData: File | Blob; // stored but not indexed!
  src?: string;

  uid: string; // provided through antd Upload component
  name: string;
  fileName: string; // provides the name value only
  lastModified: number | undefined;
  size: number;
  type: 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/gif';
  webkitRelativePath?: string;
}
