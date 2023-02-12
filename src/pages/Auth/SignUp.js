import { Button, Form, Input, notification } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ConstantPaths } from '../../constants/constants'
import { FormContainer, FormHeading } from './form-styles'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 7,
    },
  },
}

const SignUp = () => {
  const navigate = useNavigate()
  const handleFinish = values => {
    console.log(values)
    notification.open({
      message: "Sign up success",
      description: "This is description",
      placement: "topRight",
      type: "success",
      duration: 6
    })
    navigate(ConstantPaths.HOME_PAGE)
  }

  return (
    <FormContainer>
      <FormHeading>Sign Up</FormHeading>
      <Form
        {...formItemLayout}
        name="signup_form"
        onFinish={handleFinish}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please enter your username.",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-Mail"
          rules={[
            {
              type: 'email',
              message: 'E-mail not valid.',
            },
            {
              required: true,
              message: "Please enter your e-mail.",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter your password.',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match."));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <span>If you have an account. CLick <Link to={ConstantPaths.SIGN_IN}>here.</Link></span>
        </Form.Item>
        <Form.Item>
          <Button
          type="primary"
          size="large"
          htmlType="submit"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  )
}

export default SignUp