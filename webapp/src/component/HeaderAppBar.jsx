import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
    alert('click!');
}

const HeaderAppBar = () => (
    <AppBar
        title={<span style={{ cursor: "pointer" }}>Nas Dapp</span>}
        onTitleClick={handleClick}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={<FlatButton label="Submit your Dapp"
        onRightIconButtonClick={handleClick} />}
    />
);

export default HeaderAppBar;