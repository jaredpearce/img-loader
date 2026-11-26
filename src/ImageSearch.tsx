import { Input, type SearchProps } from 'antd';
import { FC, useState } from 'react';

const { Search } = Input;

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

interface ImageStuff {
  filter: Function;
}

const ImageSearch: FC<ImageStuff> = (params) => {
  const { filter } = params;

  const handleSearch = debounce((term: string) => {
    if (filter) {
      filter(term);
    }
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  // const onSearch: SearchProps['onSearch'] = (e) => {
  //   const term = e.target.value;
  //   if (search) {
  //     search(term);
  //   }
  // };

  return (
    <Search
      placeholder="Search images..."
      onChange={handleChange}
      style={{ width: 200 }}
    />
  );
};

export default ImageSearch;
