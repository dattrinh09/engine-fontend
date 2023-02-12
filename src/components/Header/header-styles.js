import styled from "styled-components"

export const HeaderLayout = styled.div`
    border-bottom: 1px solid #aaa;
`

export const Container = styled.div`
    width: 1200px;
    height: 54px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: green;
    letter-spacing: 2px;
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const SignIn = styled.div`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #333;
`

export const SignUp = styled.div`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 5px 15px;
    color: #fff;
    background-color: green;
    border-radius: 5px;
`