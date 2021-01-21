import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import {Image} from 'antd'
import {Link} from 'react-router-dom'

import IMG1 from '../../assets/img_new1.png'
import IMG2 from '../../assets/img_new2.png'
import IMG3 from '../../assets/img_new3.png'
import IMG4 from '../../assets/img_new4.png'
import IMG5 from '../../assets/img_new5.png'
import IMG6 from '../../assets/img_new6.png'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  news: Array<any>
  data: Array<any>
  initLoading: boolean
  loading: boolean
}
const newData = [{
  url: IMG1,
  title: '居家办公最高效软件推荐',
  date: '2019-03-16',
  to: ''
}, {
  url: IMG2,
  title: '苹果新笔记本将搭载M1 芯片',
  date: '2019-03-16',
  to: ''
}, {
  url: IMG3,
  title: '机房布线防坑指南',
  date: '2019-03-16',
  to: ''
}]

class New extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      news: [{
        url: IMG1,
        title: '居家办公最高效软件推荐',
        date: '2019-03-16',
        id: '1'
      }, {
        url: IMG2,
        title: '苹果新笔记本将搭载M1 芯片',
        date: '2019-03-16',
        id: '2'
      }, {
        url: IMG3,
        title: '机房布线防坑指南',
        date: '2019-03-16',
        id: '3'
      }, {
        url: IMG4,
        title: '云盘将成为下一个互联网风口',
        date: '2019-03-16',
        id: '4'
      }, {
        url: IMG5,
        title: '传iPhone 6系列手机5月份停产',
        date: '2019-03-16',
        id: '5'
      }, {
        url: IMG6,
        title: '英特尔建百亿亿次超算，预计2021年交付',
        date: '2019-03-16',
        id: '6'
      }],
      data: [],
      initLoading: true,
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({
      initLoading: false,
      data: this.state.news
    })
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      news: this.state.news.concat([...new Array(3)].map(() => ({ loading: true, name: {} }))),
    })
    const data = this.state.data.concat(newData)
    this.setState({
        data,
        news: data,
        loading: false,
      }, () => {
        window.dispatchEvent(new Event('resize'))
      },
    )
  }

  render() {
    const { initLoading, loading, news } = this.state

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
              <Link to={`/new/${res.id}`}>
                <div className="news-item">
                  <Image src={res.url} preview={false}/>
                  <div className="news-content">
                    <p className="title">{res.title}</p>
                    <div className="news-date">{res.date}</div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
        { !initLoading && !loading && (
          <div className="load-more" onClick={this.onLoadMore}>
            <p>加载更多</p>
          </div>
        )}
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
