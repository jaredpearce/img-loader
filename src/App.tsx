import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useLiveQuery } from 'dexie-react-hooks';

import FileUpload from './components/FileUpload';
import ImgSearch from './components/ImgSearch';
import ImgViewer from './components/ImgViewer';
import { db } from './data/db';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const loadedFiles = [
  { 
    name: "cas-a-webb-miri.png",
    lastModified: 1795622899726,
    name: "cas-a-webb-miri.png",
    size: 9075188,
    type: "image/png",
  }, 
  { 
    name: "KSC-20261117-PH-KLS01_0078~medium.jpg",
    lastModified: 1795623024046,
    name: "KSC-20261117-PH-KLS01_0078~medium.jpg",
    size: 100056,
    type: "image/jpeg",
  }, 
  { 
    name: "PIA00342~medium.jpg",
    lastModified: 1795623168933,
    name: "PIA00342~medium.jpg",
    size: 122699,
    type: "image/jpeg",
  }
];

function App() {
  const myData = useLiveQuery(() => db.images.toArray());
  console.log('MY --> data', myData);
  return (
    // <div class="page">
    //   <div class="page--aside"></div>
    //   <div class="page--main"></div>
    // </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
            <ImgSearch />
            <FileUpload />
            <Button onClick={async () => {
              try {
                await db.transaction('rw', db.images, async () => {
                  const stuff = await Promise.all(db.tables.map(table => table.clear()));
                  console.log('DONE!!!');
                });
              } catch (error) {
                console.log('not processsing delete', error);
              }
            }}>Clear DB</Button>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <ImgViewer params={loadedFiles} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
