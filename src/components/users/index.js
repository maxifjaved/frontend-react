import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Row, Col, Button, Table, Affix } from 'antd'
import { users } from '../../actions/users'
import SearchForm from './SearchForm'
import styles from './index.module.css'

const ButtonGroup = Button.Group

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },

];


class User extends Component {
  state = {
    selectedRowKeys: [],
  }

  componentDidMount() {
    this.props.users();
  }
  render() {
    const { selectedRowKeys } = this.state;
    const { users } = this.props;
    console.error(users)
    const rowSelection = {
      selectedRowKeys,
      onChange: srk => this.setState({ selectedRowKeys: srk })
    };
    return (
      <div>
        {/* <div className={styles['ant-advanced-search-form']}>
          <SearchForm />
          <Row className={styles['ant-row']}>
            <Col span={12} offset={12} style={{ textAlign: 'right' }}>
              <Button className={styles['ant-btn']} type="primary" onClick={this.handleSubmit}><Icon type="search" />Inquire</Button>
              <Button className={styles['ant-btn']} onClick={this.handleReset}><Icon type="cross" />Clear condition</Button>
            </Col>
          </Row>
        </div> */}

        <Affix offsetTop={8} target={() => document.getElementById('main-content-div')}>
          <ButtonGroup className={styles['nsg-table-btn']}>
            <Button type="primary">
              <Icon type="plus-circle" />
              New
          </Button>
            <Button type="primary" disabled>
              <Icon type="edit" />
              Modify
            </Button>
            <Button type="primary" disabled>
              <Icon type="delete" />
              Delete
          </Button>
          </ButtonGroup>
        </Affix>

        <div >
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
      </div>
    )
  }
}

User.propTypes = {}

function mapStateToProps(state) {
  return {
    users: state.user.users
  }
}
export default connect(mapStateToProps, { users })(User)