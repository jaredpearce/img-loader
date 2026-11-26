import { Card, Space, Button } from 'antd';
import { useState } from 'react';

import ImageList from './components/ImageList';
import ImageLoader from './components/ImageLoader';
import ImageSearch from './components/ImageSearch';
import { db } from './data/db';

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  /**
   * Updates the search term to pass to the ImageList component.
   */
  const handleFilter = (term: string) => {
    setSearchTerm(term);
  };

  /**
   * Empties the database of data. 
   * @TODO Determine how to reset the index on the DB.
   */
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

export default App;
