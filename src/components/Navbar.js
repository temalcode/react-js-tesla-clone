import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

function Navbar() {

    const [mobileMenuStatus, SetMobileMenuStatus] = useState(false)

    return (
        <Container>
            <Logo>
                <img src="/images/logo.svg" />
            </Logo>
            <Menu>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panles</a>
            </Menu>
            <RightMenu>
                <a href="#">SHOP</a>
                <a href="#">TESLA ACCOUNT</a>
                <HamburgerMenu onClick={() => SetMobileMenuStatus(true)} />
            </RightMenu>
            <MobileMenu Mstatus={mobileMenuStatus}>

                <CloseButton onClick={() => SetMobileMenuStatus(false)} />

                <div><a href="#">Model 3</a> </div>
                <div><a href="#">Model X</a> </div>
                <div><a href="#">Model Y</a> </div>
                <div><a href="#">Solar Roof</a> </div>
                <div><a href="#">Solar Panels</a> </div>
                <div><a href="#">Existing Inventory</a> </div>
                <div><a href="#">Used Inventory</a> </div>
                <div><a href="#">Cybertruck</a> </div>
                <div><a href="#">Roadster</a> </div>
            </MobileMenu>
        </Container>

    )
}

export default Navbar

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.8rem;
    z-index: 1;

    a{
        text-decoration: none;
        margin-right: 1rem;
        color: black;
        font-weight: 400;

        &:hover{
            text-decoration: underline;
        }
    }
`

const Logo = styled.div``

const Menu = styled.div`
    
    a:last-child{
        margin: 0;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a:last-child{
        margin: 0;
    }
`

const HamburgerMenu = styled(MenuIcon)`
    margin: auto;
    cursor: pointer;
`

const MobileMenu = styled.div`
    display: flex;
    padding-top: 1.5rem;
    padding-left: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    flex-direction: column;
    background: white;
    width: 300px;
    z-index: 10;
    transform: ${props => props.Mstatus ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease;

    div{
        width: 80%;
        padding: 0.8rem;
        border-bottom: darkgrey solid 1px;
    }

    a{
        font-size: 1rem;
        font-weight: 700;
        border-bottom: 1px;
    }
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
    align-self: end;
    margin-right: 1.5rem;
    margin-bottom: 0.7rem;
`

