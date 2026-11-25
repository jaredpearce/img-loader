import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { db } from '../../data/db';
import { type Image } from '../../data/Image';

const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {

    async function addImage() {
        const id = await saveImages({

        });
    }
    
    const handleImageUpload = async (event: React.FormEvent<HTMLInputElement>) => {
        const f: Image[] = event.target.files || {};
        console.log('FILES', event.target.files);
        // Handle multiple file uploads
        // const stuff: Image[] = [];
        // for(const img of f) {
        //     console.log('- img', img);
        //     stuff.push({
        //         uuid: crypto.randomUUID(),
        //         fileName: img.name,
        //         lastModified: img.lastModified,
        //         type: img.type,
        //         size: img.size
        //     });
        // }

        try {
            const id = await db.images.add({
                uuid: crypto.randomUUID(),
                ...f
            });
            console.log('---> ID', id);
        } catch (error) {
            console.log('error', error);

        }
    };

    return (
        <Button
        style={{ width: 200 }}
        size="small"
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        >
        Upload files
        <VisuallyHiddenInput
            type="file"
            onChange={handleImageUpload}
            // multiple
            accept="image/png, image/jpeg, image/jpg, image/giff"
        />
        </Button>
    );
}
