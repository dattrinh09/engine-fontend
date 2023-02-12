import { MailOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { FormContainer, FormHeading } from './form-styles'

const ForgotPassword = () => {
    const handleFinish = values => {
        console.log(values)
    }

    return (
        <FormContainer>
            <FormHeading>Forgot password</FormHeading>
            <Form
                name="forgotpassword_form"
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
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </FormContainer>
    )
}

export default ForgotPassword