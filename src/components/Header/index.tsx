import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'
import {Layout, Menu, Dropdown, Input} from 'antd'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  visible: boolean
}

class Header extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      visible: false
    }
  }

  handleVisibleChange = (flag: boolean) => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            台式机内存
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            笔记本内存
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            服务器内存
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            SSD固态硬盘
          </a>
        </Menu.Item>
      </Menu>
    );

    const search = (
      <Input
        className="search-input"
        placeholder="请输入搜索内容，如产品名称/编号"
      />
    )

    return (
      <div className="page">
        <Layout>
          <div className="header">
            <div className="brand">
              <Link to="/">
                111
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <Dropdown overlayClassName="menu-dropdown" overlay={menu} placement="bottomLeft" arrow>
                    <Link to="/product" >产品中心</Link>
                  </Dropdown>
                </li>
                <li>
                  <Link to="/new">新闻中心</Link>
                </li>
                <li>
                  <Link to="/list">技术测评</Link>
                </li>
                <li>
                  <Link to="/about">关于我们</Link>
                </li>
                <li>
                  <Dropdown
                    overlayClassName="search-dropdown"
                    overlay={search}
                    placement="bottomRight"
                    arrow
                    onVisibleChange={this.handleVisibleChange}
                    visible={this.state.visible}
                  >
                    <div className="search"></div>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Header
