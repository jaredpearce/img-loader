import { Input, type SearchProps } from 'antd';
import { FC, useState } from 'react';

const { Search } = Input;

/**
 * Debounce used as a delay to give time for the user to stop typing.
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Provides the mechanism to filter the visible list of images.
 * @params {Function} filter - provides a callback for the parent component.
 * @returns {ReactComponent} Delivers a text input used for list filtering.
 */
const ImageSearch: FC<Function> = ({ filter }) => {
  const handleSearch = debounce((term: string) => {
    if (filter) {
      filter(term);
    }
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  return (
    <Search
      placeholder="Search images..."
      onChange={handleChange}
      style={{ width: 200 }}
    />
  );
};

export default ImageSearch;
