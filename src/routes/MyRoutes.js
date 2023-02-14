import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ConstantPaths } from '../constants/constants'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import ResetPassword from '../pages/Auth/ResetPassword'
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import VerifyEmail from '../pages/Auth/VerifyEmail'
import HomePage from '../pages/HomePage/HomePage'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path={ConstantPaths.HOME_PAGE} element={<HomePage />} index />
        <Route path={ConstantPaths.SIGN_UP} element={<SignUp />} />
        <Route path={ConstantPaths.SIGN_IN} element={<SignIn />} />
        <Route path={ConstantPaths.VERIFY_EMAIL} element ={<VerifyEmail />} />
        <Route path={ConstantPaths.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ConstantPaths.RESET_PASSWORD} element={<ResetPassword />} />
    </Routes>
  )
}

export default MyRoutes