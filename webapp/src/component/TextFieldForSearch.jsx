import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const dataSource = ['Votestagram', 'NameLedger', 'BattleBlock'];

const TextFieldForSearch = () => (
    <AutoComplete
        floatingLabelText="Search Dapp"
        hintText="Dapp Name"
        filter={AutoComplete.caseInsensitiveFilter}
        openOnFocus={true}
        dataSource={dataSource}
        style={{marginLeft: "20px"}}
    />
);

export default TextFieldForSearch;