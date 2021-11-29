import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../../redux/action/userAction";
import { validateMess } from "../../../../assets/text";
import { validateEmail, regexPassword } from "../../../../assets/validate";
function RegisterForm() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { registerSuccess } = useSelector((state) => state.user);
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({ type: userAction.USER_REGISTER, payload: values });
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
        label="Mật khẩu"
        name="password"
        rules={[
          {
            required: true,
            message: validateMess.register.PASSWORD_REQ,
          },
          {
            pattern: regexPassword.gmail,
            message: validateMess.register.PASSWORD_REGEX,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Nhập lại mật khẩu"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Hãy nhập lại mật khẩu!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(validateMess.register.CON_PASSWORD)
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        className="rf__fiRS"
        wrapperCol={{
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;
