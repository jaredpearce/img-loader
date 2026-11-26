import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button, type UploadFile } from 'antd';
import { useState } from 'react';

import { db } from '../data/db';
import IMAGE_TYPES from '../data/ImageTypes';

/**
 * Method for uploading the image directly to indexeddb.
 * Typically, upload would be managed through a REST or GraphQL API.
 * Kept it self-contained and small for now.
 *
 * @returns { ReactElement } Contains a button element with an image to load upload files.
 */
const ImageLoader = () => {
  const [blobUrl, setBlobUrl] = useState();

  const handleUpload = (event: UploadChangeParam<UploadFile<any>>) => {
    const file = event.fileList[0];
    // Save to indexeddb using dexie
    const id = db.images.add({
      ...file,
      src: URL.createObjectURL(file.originFileObj),
      fileName: file.name.split('.')[0],
    });
  };

  return (
    <Upload
      accept={IMAGE_TYPES}
      showUploadList={false}
      // prevent direct upload
      beforeUpload={() => false}
      onChange={handleUpload}
    >
      <Button type="primary" icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  );
};

export default ImageLoader;
