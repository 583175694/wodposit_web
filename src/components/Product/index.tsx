import React, {Component} from 'react'
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
  products: Array<any>
}

class Product extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      products: [{
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-1.jpg',
        title: 'ECC/REG/服务器',
        subtitle: 'ECC/REG/服务器',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-2.jpg',
        title: 'SSD',
        subtitle: '嵌入式解决方案',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg',
        title: '宽温/工业级',
        subtitle: '系统稳定性高',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-1.jpg',
        title: 'ECC/REG/服务器',
        subtitle: 'ECC/REG/服务器',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-2.jpg',
        title: 'SSD',
        subtitle: '嵌入式解决方案',
        to: ''
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg',
        title: '宽温/工业级',
        subtitle: '系统稳定性高',
        to: ''
      }]
    }
  }

  render() {
    const { products } = this.state
    return <div className="product-container">
      <div className="banner"/>
      {/* 产品 */}
      <div className="introduce">
        <p>台式机内存</p>
        <p>Desktop Memory</p>
      </div>
      <div className="product">
        { products.map((res, index) => {
          return (
            <div className="product-flex">
              <div className="product-item" key={index}>
                <Image src={res.url} preview={false}/>
                <div className="product-content">
                  <p className="title">{res.title}</p>
                  <p className="subtitle">{res.subtitle}</p>
                  <div className="button">
                    <div className="pdf-button">
                      <p>规格表PDF</p>
                    </div>
                    <div className="detail-button">
                      <p>查看详情</p>
                    </div>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product)
