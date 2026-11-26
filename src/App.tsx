import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import { useLiveQuery } from 'dexie-react-hooks';

import FileUpload from './components/FileUpload';
import ImgSearch from './components/ImgSearch';
import ImgViewer from './components/ImgViewer';
import { db } from './data/db';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

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

function App() {
  const myData = useLiveQuery(() => db.images.toArray());
  console.log('myData', myData);

  const handleSearch = (searchTerm: string) => {
    console.log('searching...', searchTerm);
  };

  return (
    <>
      {/* <div class="page">
      <div class="page--aside"></div>
      <div class="page--main"></div>
    </div> */}

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8, lg: 9, xl: 6 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
            <ImgSearch options={myData} search={handleSearch} />
            <FileUpload />
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
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <ImgViewer images={myData} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
