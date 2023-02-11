import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ConstantPaths } from '../constants/constants'
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import HomePage from '../pages/HomePage/HomePage'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path={ConstantPaths.HOME_PAGE} element={<HomePage />} index />
        <Route path={ConstantPaths.SIGN_UP} element={<SignUp />} />
        <Route path={ConstantPaths.SIGN_IN} element={<SignIn />} />
    </Routes>
  )
}

export default MyRoutes