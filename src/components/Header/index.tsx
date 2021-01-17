import React from 'react'
import './index.less'
import { Link, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Product from '../Product'
import New from '../New'
import List from '../List'
import About from '../About'
import Home from '../Home'

const { Content } = Layout

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page" id="page">
        <Layout>
          <div className="header" id="header"> //导航栏div
            <div className="brand">
              <Link to="/">
                111
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/technology">
                    核心技术
                  </Link>
                </li>
                <li>
                  <Link to="/case">
                    行业案例
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    关于DUCK
                  </Link>
                </li>
                <li>
                  <Link to="/join">
                    加入我们
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Content className="content" id="content">
            <Route path="/" exact component={ Home }/>
            <Route path="/product" exact component={ Product }/>
            <Route path="/new" component={ New }/>
            <Route path="/list" component={ List }/>
            <Route path="/about" component={ About }/>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Header
