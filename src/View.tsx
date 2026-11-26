import { Card, Space, Typography, Button } from 'antd';
import { useState } from 'react';

import { db } from './data/db';
import ImageList from './ImageList';
import ImageLoader from './ImageLoader';
import ImageSearch from './ImageSearch';

const { Title } = Typography;

const myData2: FileList = [
  {
    lastModified: 1795622899726,
    name: 'cas-a-webb-miri.png',
    size: 9075188,
    type: 'image/png',
    webkitRelativePath: '',
  },
  {
    lastModified: 1795623024046,
    name: 'KSC-20261117-PH-KLS01_0078~medium.jpg',
    size: 100056,
    type: 'image/jpeg',
    webkitRelativePath: '',
  },
  {
    lastModified: 1795623168933,
    name: 'PIA00342~medium.jpg',
    size: 122699,
    type: 'image/jpeg',
    webkitRelativePath: '',
  },
];

export default function () {
  const [imgCount, setImgCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleFilter = (term: string) => {
    console.log('searching...', term);
    setSearchTerm(term);
  };

  return (
    <main>
      <section>
        <Space style={{ marginBottom: 16 }}>
          <ImageSearch filter={handleFilter} />
          <ImageLoader />
          <Button
            onClick={async () => {
              try {
                await db.transaction('rw', db.images, async () => {
                  const stuff = await Promise.all(
                    db.tables.map((table) => table.clear()),
                  );
                  console.log('DONE!!!', stuff);
                });
              } catch (error) {
                console.log('not processsing delete', error);
              }
            }}
          >
            Clear DB
          </Button>
        </Space>
        <ImageList name={searchTerm} />
      </section>
    </main>
  );
}
