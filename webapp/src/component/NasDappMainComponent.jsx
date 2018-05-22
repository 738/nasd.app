import React from 'react';
import HeaderAppBar from './HeaderAppBar';
import DappTable from './DappTable';

class NasDappMainComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderAppBar />
        <DappTable />
      </div>
    );
  }
}

export default NasDappMainComponent;