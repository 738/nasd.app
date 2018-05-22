import React from 'react';
import HeaderAppBar from './HeaderAppBar';
import TextFieldForSearch from './TextFieldForSearch';
import DappTable from './DappTable';
import Footer from './Footer';

class NasDappMainComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderAppBar />
        <TextFieldForSearch />
        <DappTable />
        <Footer />
      </div>
    );
  }
}

export default NasDappMainComponent;