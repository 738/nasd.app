import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class HeaderAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenDrawer: false,
            isOpenModal: false,
            category: 4,
        };
    }

    onTitleClicked() {
        alert('click!');
    }

    onDrawerToggled = () => this.setState({ isOpenDrawer: !this.state.isOpenDrawer });

    onDrawerClosed = () => this.setState({ isOpenDrawer: false });

    onModalOpen = () => this.setState({ isOpenModal: true });
    onModalClosed = () => this.setState({ isOpenModal: false });

    onCategoryChanged = (event, index, category) => this.setState({ category });

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onModalClosed}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.onModalClosed}
            />,
        ];

        return (
            <div>
                <AppBar
                    title={<span style={{ cursor: "pointer" }}>Nas Dapp</span>}
                    onTitleClick={this.onTitleClicked}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={<FlatButton label="Submit your Dapp" />}
                    onLeftIconButtonClick={this.onDrawerToggled}
                    onRightIconButtonClick={this.onModalOpen}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.isOpenDrawer}
                    onRequestChange={(isOpenDrawer) => this.setState({ isOpenDrawer })}>
                    <MenuItem onClick={this.onDrawerClosed}>All Dapps</MenuItem>
                    <MenuItem onClick={this.onDrawerClosed}>New Dapps</MenuItem>
                    <MenuItem primaryText="Category"
                        rightIcon={<ArrowDropRight />}
                        menuItems={[
                            <MenuItem onClick={this.onDrawerClosed} primaryText="Game" />,
                            <MenuItem onClick={this.onDrawerClosed} primaryText="Marketplace" />,
                            <MenuItem onClick={this.onDrawerClosed} primaryText="Casino" />,
                            <MenuItem onClick={this.onDrawerClosed} primaryText="Other" />,
                        ]} />
                </Drawer>
                <Dialog
                    title="Submit your Dapp"
                    actions={actions}
                    modal={false}
                    open={this.state.isOpenModal}
                    onRequestClose={this.onModalClosed}>
                    <TextField
                        hintText="Name"
                        floatingLabelText="Dapp Name"
                    />
                    <br />
                    <TextField
                        hintText="Description"
                        floatingLabelText="Dapp Description"
                    />
                    <br />
                    <SelectField
                        floatingLabelText="Category"
                        value={this.state.category}
                        onChange={this.onCategoryChanged}
                    >
                        <MenuItem value={1} primaryText="Game" />
                        <MenuItem value={2} primaryText="Casino" />
                        <MenuItem value={3} primaryText="Marketplace" />
                        <MenuItem value={4} primaryText="Others" />
                    </SelectField>
                    <br />
                    <TextField
                        hintText="Smart Contract's Address"
                        floatingLabelText="Smart Contract's Address"
                    />
                    <br />
                    <TextField
                        hintText="Web URL"
                        floatingLabelText="Dapp Web URL"
                    />
                </Dialog>
            </div>
        );
    }
}

export default HeaderAppBar;