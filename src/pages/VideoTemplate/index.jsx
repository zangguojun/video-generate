import { Button, Form, ImageUploader, Input, NavBar } from 'antd-mobile';
import { useState } from 'react';

const uploadAction = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const rst = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  }).then((rst) => rst.json());
  return {
    ...rst,
    url: `/api/${rst?.url}`,
  };
  return {
    url: URL.createObjectURL(file),
  };
};

const submitAction = async (values) => {
  const rst = await fetch('/api/ffc/create', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((rst) => rst.json());
  window.open(`/api${rst?.url}`);
};

export default function VideoTemplate() {
  const [fileList, setFileList] = useState([]);

  return (
    <>
      <NavBar onBack={() => {}}>模板</NavBar>
      <Form
        layout="horizontal"
        onFinish={submitAction}
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
      >
        <Form.Header>请选择模板与图片</Form.Header>
        <Form.Item
          name="id"
          label="模板"
          help="模板ID"
          rules={[{ required: true, message: '模板不能为空' }]}
        >
          <Input placeholder="请输入模板ID" />
        </Form.Item>
        <Form.Item name="images" label="地址" help="详情地址">
          <ImageUploader
            value={fileList}
            onChange={setFileList}
            upload={uploadAction}
          />
        </Form.Item>
      </Form>
    </>
  );
}
