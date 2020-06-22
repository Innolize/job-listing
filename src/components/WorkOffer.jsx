/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import styled from '@emotion/styled';
import insure from '../images/insure.svg';

import { css, cx } from '@emotion/core';

const Container = styled.div`
    border-radius: 5px;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 15% 40% 45%;
    box-shadow: 0px 10px  10px #63BABA;
    
`
const ImageContainer = styled.div`
    height: 150px;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 150px;

`
const FilterContainer = styled.div`
    height: 150px;

`
const keyWords = css`
    border-radius: 5px;
    padding: 5px;
    background-color: white;
    color: #63BABA;
    font-weight: 500;
    cursor:pointer;
    &:hover{
        size: 25px;
        background-color: #63BABA;
        color: white;
    }
`
const companyP = css`
    color: #63BABA;
    font-weight: 500;
    border: 0px;
    margin-bottom: 5px;
    margin-top: 0px;
    padding-right: 10px;
`
const positionP = css`
    color: rgb(99, 186, 186);
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    border: 0px;
    margin: 0px;
    padding: 0px;
`
const aditionalInfoP = css`
    color: #63BABA;
    margin: 0px;
    font-weight: 400
`

const newOffer = css`
    color: white;
    font-weight: bold;
    background-color: #63BABA;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    font-size: 15px;
    border: 0px;
    margin: 0px;
    border-radius: 50px;
`

const featuredOffer = css`
    color: white;
    font-weight: 500;
    background-color: black;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    font-size: 15px;
    border: 0px;
    margin: 0px;
    border-radius: 50px;
`

const companyImage = css`
height: 90px;
margin: auto;
margin-top: 25px;
display: block;   
`



const WorkOffer = ({ companyName = "Test" }) => {
    return (
        <div css={css`
        padding-bottom:20px`
        }>
            <Container>
                <ImageContainer>
                    <img css={companyImage} src={insure} alt="img"></img>
                </ImageContainer>
                <InfoContainer>
                    <div>
                        <div style={{ display: "flex" }}>
                            <p css={companyP} children={companyName} />
                            <p css={newOffer}>New!</p>
                            {/* {newOffer === true && } */}
                            <p css={featuredOffer}>Featured</p>
                            {/* {featuredOffer === true && } */}
                        </div>
                        <div>
                            <p css={positionP}>Senior Frontend Developer</p>
                        </div>
                        <div>
                            <p css={aditionalInfoP}>1d ago * Full Time * USA only</p>
                        </div>
                    </div>
                </InfoContainer>
                <FilterContainer>
                    <div css={css`
                    text-align: center;
                    margin-top: 50px;
                    display:flex
                `}>
                        <p css={keyWords}>Frontend </p>
                        <p css={keyWords}>Senior </p>
                        <p css={keyWords}>HTML </p>
                        <p css={keyWords}>CSS </p>
                        <p css={keyWords}>Javascript </p>
                    </div>
                </FilterContainer>
            </Container >
        </div>
    )
}

export default WorkOffer