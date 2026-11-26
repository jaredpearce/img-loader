import { Card, Space, Typography, Button } from 'antd';
import { useState } from 'react';

import ImageList from './components/ImageList';
import ImageLoader from './components/ImageLoader';
import ImageSearch from './components/ImageSearch';
import { db } from './data/db';

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

  const handleDBRestore = async () => {
    try {
      await db.transaction('rw', db.images, async () => {
        await db.tables.map((table) => table.clear());
      });
    } catch (error) {
      console.log('not processsing delete', error);
    }
  };

  return (
    <Card variant="borderless" className="page">
      <Space>
        <ImageSearch filter={handleFilter} />
        <ImageLoader />
        <Button onClick={handleDBRestore}>Clear DB</Button>
      </Space>
      <section className="page-list">
        <ImageList name={searchTerm} />
      </section>
    </Card>
  );
}
