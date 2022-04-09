
import { style } from "@mui/system";
import React from "react"
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({ title, para, bgImg, leftButton, rightButton, downArrow }) {

    return (
        <div>
            {/* <h1>test section</h1> */}
            <Container backgroundImg={bgImg}>
                <Fade bottom>
                    <Text>
                        <h1>{title}</h1>
                        <p>{para}</p>
                    </Text>
                </Fade>
                <Fade bottom>
                    <Buttons>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                        {
                            rightButton &&
                            <RightButton>
                                {rightButton}
                            </RightButton>
                        }
                    </Buttons>
                </Fade>
                {
                    downArrow &&
                    <DownArrow src="/images/down-arrow.svg" />
                }
            </Container>
        </div>
    )
}
export default Section;

const Container = styled.div`
    background-image: ${props => `url(/images/${props.backgroundImg})`};
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
`

const Text = styled.div`
    margin-top: 7rem;
    text-align: center;
    margin-bottom: 22rem;
    p {
        font-size: 1.3rem;
        /* color: grey; */
        font-weight: 400;
    }

    @media (max-width: 768px) {
        margin-bottom: 18rem;
    }
`

const Buttons = styled.div`

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

const LeftButton = styled.button`
    padding-top: 0.45rem;
    padding-bottom: 0.45rem;
    border: none;
    width: 270px;
    margin-right: 1rem;
    border-radius: 20px;
    background: #585858;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    font-weight: 400;
`

const DownArrow = styled.img`
    margin-top: 0.7rem;
    width: 70px;
    animation: downarrow infinite 1.5s ;
`
