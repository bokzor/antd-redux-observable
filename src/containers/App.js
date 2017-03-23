import React, { Component } from 'react';
import { Layout, LocaleProvider } from 'antd';
const { Sider, Content } = Layout;
import 'antd/dist/antd.min.css';
import Datatable from '../components/DataTable';
import QueryGenerator from '../containers/QueryGenerator';
import frBe from 'antd/lib/locale-provider/fr_BE';


export default class App extends Component {
  render() {
    return (
      <LocaleProvider locale={frBe}>
        <Layout>

          {/*<Sider width="400">
            <QueryGenerator />
          </Sider>*/}
          <Content><Datatable/></Content>
        </Layout>
      </LocaleProvider>
    );
  }
}
