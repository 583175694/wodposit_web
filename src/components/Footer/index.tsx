import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Input } from 'antd'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
}

class Footer extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
    }
  }

  render() {
    return <div className="footer">
      <ul>
        <li>首页</li>
        <li>产品中心</li>
        <li>新闻中心</li>
        <li>技术测评</li>
        <li>关于我们</li>
      </ul>
      <div className="content">
        <div className="detail">
          <p>输入邮箱获取最新价格和优惠！</p>
          <div className="detail-input">
            <Input/>
            <div className="confirm-button">提交</div>
          </div>
        </div>
        <div className="icon-qrcode"></div>
        <div className="icon-logo"></div>
      </div>
      <div className="icp">
        <p>© 2019 深圳市沃存科技有限公司</p>
        <p>Powered by 企销云 技术支持：三今网络 粤ICP备19035008号</p>
      </div>
    </div>
  }
}

function mapStateToProps(state: RootState): StateProps {
  return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, AnyAction>): DispatchProps => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
