import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import styled from 'styled-components';

const dataSource = ['Votestagram', 'NameLedger', 'BattleBlock'];

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const TextFieldForSearch = () => (
    <Wrapper>
        <AutoComplete
            floatingLabelText="Search Dapp"
            hintText="Dapp Name"
            filter={AutoComplete.caseInsensitiveFilter}
            openOnFocus={true}
            dataSource={dataSource}
            style={{marginLeft: "20px"}}
        />
        <IconButton>
            <ActionSearch />
        </IconButton>
    </Wrapper>
);

export default TextFieldForSearch;