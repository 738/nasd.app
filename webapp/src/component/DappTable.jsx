import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const dappList = [
    {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    }, {
        name: 'Votestagram',
        category: 'Social Networking',
        balance: 4638758,
        dau: 6821,
        volume24: 21979,
        volume7: 97814,
        tx24: 42888,
        tx7: 240439
    },
];

class DappTable extends React.Component {
    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow style={{ fontSize: "20px" }}>
                        <TableHeaderColumn>#</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Category">Category</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Balance">Balance</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The DAU">DAU</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Volume(24h)">Volume(24h)</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Volume(7d)">Volume(7d)</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Tx(24h)">Tx(24h)</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Tx(7d)">Tx(7d)</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {dappList.map((dappItem, index) =>
                        <TableRow key={index}>
                            <TableRowColumn>{index + 1}</TableRowColumn>
                            <TableRowColumn>{dappItem.name}</TableRowColumn>
                            <TableRowColumn>{dappItem.category}</TableRowColumn>
                            <TableRowColumn>{dappItem.balance}</TableRowColumn>
                            <TableRowColumn>{dappItem.dau}</TableRowColumn>
                            <TableRowColumn>{dappItem.volume24}</TableRowColumn>
                            <TableRowColumn>{dappItem.volume7}</TableRowColumn>
                            <TableRowColumn>{dappItem.tx24}</TableRowColumn>
                            <TableRowColumn>{dappItem.tx7}</TableRowColumn>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default DappTable;
