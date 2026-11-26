import { Input } from 'antd';
import { type FC } from 'react';

const { Search } = Input;

/**
 * Debounce used as a delay to give time for the user to stop typing.
 */
function debounce(fn: Function, delay: number) {
  let timer: number;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

type ImageProps = { 
  filter: (term: string) => void;
};


/**
 * Provides the mechanism to filter the visible list of images.
 * @params {ImageProps} filter - provides a callback for the parent component.
 * @returns {ReactComponent} Delivers a text input used for list filtering.
 */
const ImageSearch: FC<ImageProps> = ({ filter }) => {
  const handleSearch = debounce((term: string) => {
    if (filter) {
      filter(term);
    }
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
