import { type Image } from '../../data/Image';

export default function ImgViewer(images: any) {
  console.log('images', images, typeof images);
  const files = images?.images || [];

  if (!files || files === undefined || files.length === 0)
    return 'No images were loaded';

  const getSrc = (img: Blob) => {
    return URL.createObjectURL(img);
  };
  return files.map((src: Image, index: number) => (
    <figure key={`${src.lastModified}-${index}`}>
      {/* <img src={getSrc(src.imageData)} /> */}
      <figcaption>{src.type}</figcaption>
    </figure>
  ));
}
