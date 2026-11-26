import Icon, { DeleteOutlined } from '@ant-design/icons';
import { Button, Masonry } from 'antd';
import { useLiveQuery } from 'dexie-react-hooks';
import { type FC } from 'react';

import { db } from '../data/db';

type ImageListProps = {
  name: string;
}

/**
 * Makes a request to indexeddb to retrieve all available data.
 * @params {ImageListProps} Search term used to filter the data. Initially set to ''.
 * @returns {ReactComponent}
 */
const ImageList: FC<ImageListProps> = ({ name }) => {
  const images = useLiveQuery(
    async () => db.images.filter((src) => src.name.includes(name)).toArray(),
    [name],
  );

  /**
   * Removes item from the database based off of the image `id`.
   */
  const handleDelete = (img: Partial<File & { id: any}>) => {
    if (img.id) {
      db.images.delete(img.id);
    }
  };

  if (!images)
    return (
      <div>
        <p>No images found</p>
      </div>
    );

  return (
    <>
      <header>
        <h1>{images.length} Images</h1>
      </header>
      <Masonry
        columns={4}
        gutter={16}
        items={images.map((img, index) => ({
          key: `item-${index}`,
          data: img,
        }))}
        itemRender={({ data }) => (
          <>
            <figure style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src={`${data.src}`}
                alt={`alt:${data.name}`}
                style={{ width: '100%' }}
              />
              <figcaption style={{ alignSelf: 'center' }}>
                {data.name}
              </figcaption>
            </figure>

            <Button
              type="dashed"
              onClick={() => handleDelete(data)}
              style={{ position: 'absolute', top: 12, right: 12 }}
            >
              <Icon component={DeleteOutlined} />
            </Button>
          </>
        )}
      />
    </>
  );
};

export default ImageList;
