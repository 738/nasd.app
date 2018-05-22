import React from 'react';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #596275;
    justify-content: center;
    align-items: center;
    text-align: center;
    user-select: none;
    padding-top: 20px;
    margin-top: 80px;
    flex-direction: column;
`;

const Copyright = styled.div`
    font-size: 20px;
    color: #ecf0f1;
    font-family: 'Open Sans', sans-serif;
`;

const Footer = () => (
    <Wrapper>
        <Copyright>© 2018 nasd.app</Copyright>
        <FlatButton label="Contact us" primary={true} />
        <IconButton tooltip="Github" touch={true} tooltipPosition="bottom-right">
            <i className="material-icons">code</i>
        </IconButton>
    </Wrapper>
)

export default Footer;
