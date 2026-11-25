import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import FileUpload from './components/FileUpload';
import ImgSearch from './components/ImgSearch';

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

function App() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                      <ImgSearch />
                      <FileUpload />
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
