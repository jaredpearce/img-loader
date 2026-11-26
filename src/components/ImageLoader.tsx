import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';

import { db } from '../data/db';

/**
 * Method for uploading the image directly to indexeddb.
 * Typically, upload would be managed through a REST or GraphQL API.
 * Kept it self-contained and small for now.
 *
 * @returns { ReactElement } Contains a button element with an image to load upload files.
 */
const ImageLoader = () => {
  const handleUpload = (event: { fileList: any[]}) => {
    const file = event.fileList[0];
    // Save to indexeddb using dexie
    db.images.add({
      ...file,
      src: URL.createObjectURL(file.originFileObj),
      fileName: file.name.split('.')[0],
    });
  };

  return (
    <Upload
      accept=".png, .jpeg, .jpg, .gif"
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
