import { Button, Result } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ConstantPaths } from '../../constants/constants'
import axiosInstance from '../../requests/axiosInstance'

const VerifyEmail = () => {
    const params = useParams()
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
    return (
        <>
            {verifyUrl ? (
                <Result
                    status="success"
                    title="Verify e-mail success!"
                    subTitle="You can sign in now."
                    extra={(
                        < Link to={ConstantPaths.SIGN_IN} >
                            <Button type="primary">
                                Sign In
                            </Button>
                        </Link>
                    )}
                />
            ) : (
                <Result
                    status="error"
                    title="Verify e-mail failed!"
                    subTitle="This link is not valid. Please try on another link or sign up again."
                    extra={(
                        < Link to={ConstantPaths.SIGN_UP} >
                            <Button type="primary">
                                Sign Up
                            </Button>
                        </Link>
                    )}
                />
            )}
        </>
    )
}

export default VerifyEmail