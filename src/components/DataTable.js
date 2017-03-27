import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table } from 'antd';
import config from '../constants/datatableConfig';
import FilterGroupContainer from '../models/FilterGroupContainer';
import { fetchEntitiesAction } from '../actionCreators';

class DataTable extends Component {


  handleTableChange(pagination, filters, sorter) {
    console.log(pagination, sorter);
  }

  fetch(entitySet = config.entitySet, filter = new FilterGroupContainer(), page = 1, limit = 10, order = "") {
    this.props.fetchEntities(entitySet, filter, page, limit, order);
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <Table columns={config.columns}

             //rowKey={record => record.registered}
             //dataSource={this.state.data}
             //pagination={this.state.pagination}
             //loading={this.state.loading}
             onChange={this.handleTableChange}
      />
    );
  }
}



const mapStateToProps = (state) => {
  return {}
};


export default connect(mapStateToProps, {fetchEntities: fetchEntitiesAction})(DataTable);
