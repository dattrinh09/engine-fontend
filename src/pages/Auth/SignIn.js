import { MailOutlined } from '@ant-design/icons'
import { LockOutlined } from '@ant-design/icons/lib/icons'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ConstantPaths } from '../../constants/constants'
import { FormContainer, FormHeading } from './form-styles'

const SignIn = () => {
  const handleFinish = values => {
    console.log(values)
  }

  return (
    <FormContainer>
      <FormHeading>Sign In</FormHeading>
      <Form
        name="signin_form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail not valid."
            },
            {
              required: true,
              message: "Please enter your e-mail."
            }
          ]}
        >
          <Input prefix={<MailOutlined />} type="email" placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password."
            }
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <a href="">Forgot password?</a>
          <br />
          <span>If you don't have an account. Click <Link to={ConstantPaths.SIGN_UP}>here.</Link></span>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  )
}

export default SignIn