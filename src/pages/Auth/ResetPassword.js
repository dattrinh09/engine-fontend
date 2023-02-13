import { Button, Form, Input } from 'antd';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../requests/axiosInstance';
import { showNotification } from '../../ultis/notification';
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

const ResetPassword = () => {
    const [error, setError] = useState("")
    const params = useParams()
    const handleFinish = async values => {
        console.log("values", values)
        console.log("email",params.email,"token", params.token)
        // try {
        //     const res = await axiosInstance.patch(`auth/reset_password/${params.email}/${params.token}`, {
        //         new_password: values.password
        //     })
        //     console.log(res.data);
        //     showNotification("Reset password success!", "Please signin again!", "success", "top", 3)
        // } catch (e) {
        //     console.log(e)
        //     setError(e.response.data.error.error_message)
        // }
    }
    return (
        <FormContainer>
            <FormHeading>Reset Password</FormHeading>
            <Form
                name="resetpassword_form"
                {...formItemLayout}
                onFinish={handleFinish}
            >
                <Form.Item
                    name="password"
                    label="New Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your new password.',
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
                            message: "Please confirm your new password.",
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

export default ResetPassword