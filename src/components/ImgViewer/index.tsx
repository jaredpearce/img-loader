import { type Image } from '../../data/Image';
/**
 * @params
 */
export default function ImgViewer({params}: Image[]) {
  if (!params || params === undefined || params.length === 0) return 'No images were loaded';
  return params.map((src, index) => (
      <figure key={src.lastModified + index}>
        <img src={src.url} />
        <figcaption>{src.type}</figcaption>
      </figure>
  ));
};
