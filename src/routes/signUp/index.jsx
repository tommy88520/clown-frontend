import React from 'react';
import { signUp } from '../../features/userSlice'
import CustomButton from '../../components/customButton/customButton'
import './signUp.scss'
import {
  Form,
  Input,
  Select,
} from 'antd';
const { Option } = Select;
const SignUp = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    signUp(values)
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogin = async () => {
    window.open(`${process.env.REACT_APP_BACKEND_BASE_URL}google/login`, "_self");
  };
  return (
    <div className="sign-up">
      <h2>還沒有賬號嗎？</h2>
      <p>請註冊</p>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
        scrollToFirstError
        className="sign-up__form"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password autoComplete="off"/>
        </Form.Item>

        <Form.Item
          name="confirm_password"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item className="submit-item">
          <CustomButton htmlType="submit" text="送出" />
        </Form.Item>
        <div className="sign-up__google-login">
          <CustomButton text="google註冊/登入" onClick={handleLogin} />
        </div>
      </Form>

    </div>


  );
};
export default SignUp;