import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../../redux/action/userAction";
import { validateMess } from "../../../../assets/text";
function LoginForm() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { registerSuccess } = useSelector((state) => state.user);
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({ type: userAction.USER_LOGIN, payload: values });
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (registerSuccess) {
    onReset();
  }
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: validateMess.register.EMAIL_REQ,
          },
          {
            type: "email",
            message: validateMess.register.EMMAIL_TYPE,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: validateMess.register.PASSWORD_REQ,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 24,
        }}
        className="rf__fiRS"
      >
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
