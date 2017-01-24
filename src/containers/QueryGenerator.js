import React, { Component } from 'react'

import { fetchMetadata } from '../actionCreators';

import { Select, Input, Button, Row, DatePicker} from 'antd';
const Option = Select.Option;
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;



export default class QueryGenerator extends Component {

  handleChange(value) {
    fetchMetadata('mail_contact');
    console.log(value);
  }

  render() {
    return (
      <div>
        <InputGroup compact>
          <Select
            style={{ width: '33%' }}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.handleChange}
            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>

          <Select
            showSearch
            style={{ width: '33%' }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.handleChange}
            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Contains</Option>
            <Option value="lucy">=</Option>
            <Option value="tom">!=</Option>
          </Select>
          <DatePicker
            style={{ width: '33%' }}
          />
        </InputGroup>

        <Row type="flex" justify="space-around" align="middle">
          <ButtonGroup size="small" style={{padding: "5px"}}>
            <Button type="primary">
              AND
            </Button>
            <Button type="secondary">
              OR
            </Button>
          </ButtonGroup>
        </Row>
      </div>
    )
  }
}
