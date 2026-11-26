import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function ImgSearch(options, searchTerm) {
  console.log('options', options, searchTerm);
  return (
    <Autocomplete
      id="size-small-standard"
      style={{ width: '25%' }}
      size="small"
      options={options}
      //   getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Size small"
          placeholder="Images"
        />
      )}
    />
  );
}
