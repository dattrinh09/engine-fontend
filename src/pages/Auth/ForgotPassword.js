import { MailOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { FormContainer, FormHeading } from './form-styles'
import axiosInstance from '../../requests/axiosInstance'
import { showNotification } from '../../ultis/notification'

const ForgotPassword = () => {
    const [error, setError] = useState("")
    const handleFinish = async values => {
        try {
            await axiosInstance.post('auth/forgot_password', values)
            showNotification("Reset password!", "Please check link reset password your verify email!", "info", "top", 3)
          } catch(e) {
            console.log(e)
            setError(e.response.data.error.error_message)
          }
    }

    return (
        <FormContainer>
            <FormHeading>Forgot password</FormHeading>
            <Form
                name="forgotpassword_form"
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
                    {error && <span style={{ color: "red" }}>{error}</span>}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{ marginTop: "10px" }}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </FormContainer>
    )
}

export default ForgotPassword