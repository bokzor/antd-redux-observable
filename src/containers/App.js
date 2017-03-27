import React, {Component} from 'react';
import {Layout, LocaleProvider} from 'antd';
const {Sider, Content} = Layout;
import {connect} from 'react-redux'
import 'antd/dist/antd.min.css';

import Datatable from '../components/DataTable';
import QueryGenerator from '../containers/QueryGenerator';
import frBe from 'antd/lib/locale-provider/fr_BE';

import config from '../constants/datatableConfig';

import {fetchMetadataAction} from '../actionCreators/index';

class App extends Component {

  componentDidMount() {
    this.props.fetchMetadata(config.entitySet);
  }

  render() {
    return (
      <LocaleProvider locale={frBe}>
        <Layout>
          {
            //<Sider width="400">
              //<QueryGenerator />
            //</Sider>
          }
          <Content>
            <Datatable/>
          </Content>
        </Layout>
      </LocaleProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  fetchMetadata(entitySet) {
    dispatch(fetchMetadataAction(entitySet))
  }
});

//export default connect(mapStateToProps, {fetchMetadata: fetchMetadataAction})(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
