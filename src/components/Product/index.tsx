import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Image } from "antd"
import {Link} from 'react-router-dom'

import IMG1 from '../../assets/img_product7.png'
import IMG2 from '../../assets/img_product6.png'
import IMG3 from '../../assets/img_product5.png'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  products: Array<any>
  data: Array<any>
  initLoading: boolean
  loading: boolean
}

const newData = [{
  id: 1,
  url: IMG1,
  title: 'ECC/REG/服务器',
  subtitle: 'ECC/REG/服务器',
}, {
  id: 2,
  url: IMG2,
  title: 'SSD',
  subtitle: '嵌入式解决方案',
}, {
  id: 3,
  url: IMG3,
  title: '宽温/工业级',
  subtitle: '系统稳定性高',
}]

class Product extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      products: [{
        id: 1,
        url: IMG1,
        title: 'ECC/REG/服务器',
        subtitle: 'ECC/REG/服务器',
        to: ''
      }, {
        id: 2,
        url: IMG2,
        title: 'SSD',
        subtitle: '嵌入式解决方案',
        to: ''
      }, {
        id: 3,
        url: IMG3,
        title: '宽温/工业级',
        subtitle: '系统稳定性高',
        to: ''
      }],
      data: [],
      initLoading: true,
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({
      initLoading: false,
      data: this.state.products
    })
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      products: this.state.products.concat([...new Array(3)].map(() => ({ loading: true, name: {} }))),
    })
    const data = this.state.data.concat(newData)
    this.setState({
        data,
        products: data,
        loading: false,
      }, () => {
        window.dispatchEvent(new Event('resize'))
      },
    )
  }

  render() {
    const { initLoading, loading, products } = this.state

    return <div className="product-container">
      <div className="banner">
        <div className="mask"></div>
      </div>
      {/* 产品 */}
      <div className="introduce">
        <p>台式机内存</p>
        <p>Desktop Memory</p>
      </div>
      <div className="product">
        { products.map((res, index) => {
          return (
            <div className="product-flex" key={index}>
              <div className="product-item">
                <Image src={res.url} preview={false}/>
                <div className="product-content">
                  <p className="title">{res.title}</p>
                  <p className="subtitle">{res.subtitle}</p>
                  <div className="button">
                    <div className="pdf-button">
                      <p>规格表PDF</p>
                    </div>
                    <div className="detail-button">
                      <Link to={`/product/${res.id}`}><p>查看详情</p></Link>
                    </div>
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product)
