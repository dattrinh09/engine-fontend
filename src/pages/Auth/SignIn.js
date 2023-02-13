import { MailOutlined } from '@ant-design/icons'
import { LockOutlined } from '@ant-design/icons/lib/icons'
import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ConstantPaths } from '../../constants/constants'
import { FormContainer, FormHeading } from './form-styles'
import axiosInstance from '../../requests/axiosInstance'
import { showNotification } from '../../ultis/notification'

const SignIn = () => {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleFinish = async values => {
    try {
      const res = await axiosInstance.post('auth/signin', values)
      console.log(res.data);
      showNotification("Signin success!", "Please check your verify email!", "success", "top", 5)
      navigate(ConstantPaths.HOME_PAGE)
    } catch(e) {
      console.log(e)
      setError(e.response.data.error.error_message)
    }
  }

  return (
    <FormContainer>
      <FormHeading>Sign In</FormHeading>
      <Form
        name="signin_form"
        onFocus={() => setError("")}
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
        {error && <span style={{ color: "red" }}>{error}</span>}
        <Form.Item>
          <Link to={ConstantPaths.FORGOT_PASSWORD}>Forgot password?</Link>
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