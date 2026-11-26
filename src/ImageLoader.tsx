import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button, type UploadFile } from 'antd';
import { useState } from 'react';

import { db } from './data/db';
import IMAGE_TYPES from './data/ImageTypes';

const ImageLoader = () => {
  const [blobUrl, setBlobUrl] = useState();
  // should return dataURL as a string
  const handlePreview = async (file: File | Blob) => {
    console.log('preview', file);
    const myUri = URL.createObjecURL(file);
    console.log('source', myUri);
    const myPromise = new Promise();
    myPromise.resolve();
  };

  const handleUpload = (event: UploadChangeParam<UploadFile<any>>) => {
    console.log('stuff', event.fileList);
    const file = event.fileList[0];
    const id = db.images.add({
      ...file,
      src: URL.createObjectURL(file.originFileObj)
    });
    console.log('id -->', id);
  };
  return (
    <Upload
      accept={IMAGE_TYPES}
      listType="picture"
      // previewFile={handlePreview}
      showUploadList={false}
      // prevent direct upload
      beforeUpload={() => false}
      onChange={handleUpload}
    >
      <Button type="primary" icon={<UploadOutlined />}>
        Click to Upload
      </Button>
    </Upload>
  );
};

export default ImageLoader;
