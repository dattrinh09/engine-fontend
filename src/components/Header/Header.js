import React from 'react'
import { Link } from 'react-router-dom'
import { ConstantPaths } from '../../constants/constants'
import { Container, HeaderLayout, Logo, Menu, SignIn, SignUp } from './header-styles'

const Header = () => {
    return (
        <HeaderLayout>
            <Container>
                <Link to={ConstantPaths.HOME_PAGE} style={{ textDecoration: "none" }}>
                    <Logo>ENGINE</Logo>
                </Link>
                <Menu>
                    <Link to={ConstantPaths.SIGN_IN} style={{ textDecoration: "none" }}>
                        <SignIn>Sign In</SignIn>
                    </Link>
                    <Link to={ConstantPaths.SIGN_UP} style={{ textDecoration: "none" }}>
                        <SignUp> Sign Up</SignUp>
                    </Link>
                </Menu>
            </Container>
        </HeaderLayout>
    )
}

export default Header