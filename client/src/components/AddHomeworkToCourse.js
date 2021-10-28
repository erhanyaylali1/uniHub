import React, { useState } from 'react';
import { Upload, message, Button, Input, Form, Radio, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from '../utils/apiCall'
import moment from 'moment';

const AddHomeworkToCourse = () => {

    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = (deadLine, homeworkName, type) => {

        const formData = new FormData();
        fileList.forEach(file => {
          formData.append('files', file);
        });
        formData.append('deadLine', deadLine);
        formData.append('homeworkName', homeworkName);
        formData.append('type', type);

        setUploading(true);
        
        axios('courses1/1/addHomework',{
            method: 'post',
            processData: false,
            data: formData
        }).then((res) => {
            message.success(res.data);
            setFileList([]);
        }).catch((err) => {
            console.log(err)
        }).finally(()=> {
            setUploading(false)
        })
    }

    const props = {
        onRemove: (file) => {
            const files = fileList.filter((el) => el !== file);
            setFileList(files);
        },
        beforeUpload: (file) => {
          setFileList([...fileList, file])
          return false;
        },
        fileList,
    };

    const handleSubmit = (values) => {
        const { homeworkName, type } = values;
        const deadLine = values.deadLine.format("DD.MM.YYYY");
        handleUpload(deadLine, homeworkName, type);
    }

    const download = () => {
        axios('/download', {
            method: 'post',
            data: {
                path: "uploads/homeworks/28.10.2021-GR10-ProjectPlan-050121-2024-34.pdf",
            }
        }).catch(err => console.log(err))
    }

    return (
        <div style={{ padding: 50 }}>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={handleSubmit}
            >
                <Form.Item label="Homework Name" name="homeworkName" required>
                    <Input />
                </Form.Item>
                <Form.Item label="Type" name="type" initialValue="0">
                    <Radio.Group>
                        <Radio.Button value="0">Homework</Radio.Button>
                        <Radio.Button value="1">Exam</Radio.Button>
                        <Radio.Button value="large">Quiz</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Deadline" name="deadLine" initialValue={moment()}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Select File" name="file">  
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={uploading}
                        style={{ marginLeft: '28.4%'}}
                        
                    >
                        {uploading ? 'Uploading' : 'Start Upload'}
                    </Button>
                </Form.Item>
            </Form>
            <Button 
                type="primary"
                onClick={download}
            >
                Download the Homework
            </Button>
        </div>
    )
}

export default AddHomeworkToCourse
