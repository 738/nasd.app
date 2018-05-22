import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #596275;
    justify-content: center;
    align-items: start;
    text-align: center;
    user-select: none;
    padding-top: 20px;
`;

const Copyright = styled.div`
    font-size: 20px;
    color: #ecf0f1;
    font-family: 'Open Sans', sans-serif;
`;

const Footer = () => (
    <Wrapper>
        <Copyright>© 2018 nasd.app</Copyright>
    </Wrapper>
)

export default Footer;
