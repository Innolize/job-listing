/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import styled from '@emotion/styled';
import insure from '../images/insure.svg';

import { css, cx } from '@emotion/core';

const Container = styled.div`
    border-radius: 20px;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 15% 40% 45%;
    box-shadow: 10px 10px  15px #5AA6A2;
    
`
const ImageContainer = styled.div`
    height: 150px;
`
const InfoContainer = styled.div`
    height: 150px;
`
const FilterContainer = styled.div`
    height: 150px;

    
`




const WorkOffer = ({ companyName = "Test", newOffer }) => {
    return (
        <Container>
            <ImageContainer>
                <img css={css`
                    height: 90px;
                    margin: auto;
                    margin-top: 25px;
                    display: block;                
                `} src={insure} alt="img"></img>
            </ImageContainer>
            <InfoContainer>
                <h4 children={companyName} />
                {newOffer === true && <p>New!</p>}
                <div>
                    <h2>Senior Frontend Developer</h2>
                </div>
                <div>
                    <p>1d ago * Full Time * USA only</p>
                </div>
            </InfoContainer>
            <FilterContainer>
                <div css={css`
                    text-align: center;
                    margin-top: 50px;
                    display:flex
                `}>
                    <p css={css`padding-left: 20px; background-color: white; color: #5DA7A6`}>Frontend </p>
                    <p css={css`padding-left: 20px; background-color: white; color: #5DA7A6`}>Senior </p>
                    <p css={css`padding-left: 20px; background-color: white; color: #5DA7A6`}>HTML </p>
                    <p css={css`padding-left: 20px; background-color: white; color: #5DA7A6`}>CSS </p>
                    <p css={css`padding-left: 20px; background-color: white; color: #5DA7A6`}>Javascript </p>
                </div>
            </FilterContainer>
        </Container >
    )
}

export default WorkOffer