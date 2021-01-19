import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import {Image} from "antd";

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  news: Array<any>
}

class New extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      news: [{
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-1.jpg',
        title: '居家办公最高效软件推荐',
        date: '2019-03-16',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-2.jpg',
        title: '苹果新笔记本将搭载M1 芯片',
        date: '2019-03-16',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg',
        title: '机房布线防坑指南',
        date: '2019-03-16',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-1.jpg',
        title: '云盘将成为下一个互联网风口',
        date: '2019-03-16',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-2.jpg',
        title: '传iPhone 6系列手机5月份停产',
        date: '2019-03-16',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg',
        title: '英特尔建百亿亿次超算，预计2021年交付',
        date: '2019-03-16',
        to: ''
      }],
    }
  }

  render() {
    const { news } = this.state

    return <div className="news-container">
      <div className="banner">
        <div className="mask" />
      </div>
      {/* 产品 */}
      <div className="introduce">
        <p>最新资讯</p>
        <p>NEWS</p>
      </div>
      <div className="news">
        { news.map((res, index) => {
          return (
            <div className="news-flex" key={index}>
              <div className="news-item">
                <Image src={res.url} preview={false}/>
                <div className="news-content">
                  <p className="title">{res.title}</p>
                  <div className="news-date">{res.date}</div>
                </div>
              </div>
            </div>
          )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(New)
