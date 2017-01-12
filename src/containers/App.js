import React, { Component } from 'react';
import { Layout, LocaleProvider } from 'antd';
const { Sider, Content } = Layout;
import 'antd/dist/antd.min.css';
import Datatable from '../components/DataTable';
import QueryGenerator from '../containers/QueryGenerator';
import enUS from 'antd/lib/locale-provider/en_US';


export default class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Layout>
          <Sider width="400">
            <QueryGenerator />
          </Sider>
          <Content><Datatable/></Content>
        </Layout>
      </LocaleProvider>
    );
  }
}
