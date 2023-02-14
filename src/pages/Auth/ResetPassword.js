import { Button, Form, Input, Result } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ConstantPaths } from '../../constants/constants';
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
    const params = useParams()
    const naviate = useNavigate()
    const [error, setError] = useState("")
    const [verifyUrl, setVerifyUrl] = useState(false)
    useEffect(() => {
        const verify = async () => {
            if (params.email && params.token) {
                try {
                    await axiosInstance.get(`auth/reset_password/${params.email}/${params.token}`)
                    setVerifyUrl(true)
                } catch {
                    setVerifyUrl(false)
                }
            }
        }
        verify()
    }, [params])
    const handleFinish = async values => {
        try {
            await axiosInstance.patch(`auth/reset_password/${params.email}/${params.token}`, {
                new_password: values.password
            })
            showNotification("Reset password success!", "Please signin again!", "success", "top", 3)
            naviate(ConstantPaths.SIGN_IN)
        } catch (e) {
            console.log(e)
            setError(e.response.data.error.error_message)
        }
    }
    return (
        <>
            {verifyUrl ? (
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
            ) : (
                <Result
                    status="error"
                    title="Reset password failed!"
                    subTitle="This link is not valid. PLease try on another link."
                    extra={(
                        < Link to={ConstantPaths.HOME_PAGE} >
                            <Button type="primary">
                                Back to home
                            </Button>
                        </Link>
                    )}
                />
            )}
        </>
    )
}

export default ResetPassword