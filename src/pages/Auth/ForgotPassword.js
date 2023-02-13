import { MailOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { FormContainer, FormHeading } from './form-styles'

const ForgotPassword = () => {
    const [error, setError] = useState("")
    const handleFinish = values => {
        console.log(values)
        setError("E-mail is not valid!")
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