import React from 'react'
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.less'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Image } from 'antd'

import banner1 from '../../assets/home_banner.png'
import banner2 from '../../assets/about_banner.png'
import banner3 from '../../assets/product_banner.png'
import {Link} from "react-router-dom";

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  banner: Array<Banner>
  products: Array<any>
}

interface Banner {
  url: string
}

Swiper.use([Autoplay]);

class Home extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      banner: [{
        url: banner1
      }, {
        url: banner2
      }, {
        url: banner3
      }],
      products: [{
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-1.jpg',
        title: 'ECC/REG/服务器',
        subtitle: 'ECC/REG/服务器',
        id: '1'
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-2.jpg',
        title: 'SSD',
        subtitle: '嵌入式解决方案',
        id: '2'
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg',
        title: '宽温/工业级',
        subtitle: '系统稳定性高',
        id: '3'
      }]
    }
  }

  componentDidMount(){
    // 实例化
    new Swiper('.swiper-container',{
      autoplay: {
        delay: 5000,
      },
      loop: true,
      pagination:{
        el:'.swiper-pagination'
      },
    })
  }

  render() {
    const { banner, products } = this.state
    return <div className="home-container">
      {/* Banner */}
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          { banner.map((res, key) => {
            return (
              <div className='swiper-slide' key={key}>
                <Image src={res.url}  preview={false} />
              </div>
            )
          })}
        </div>
        {/* 分页器结构 */}
        <div className='swiper-pagination' />
        <div className="mask">
          <p className="banner-title">生活多姿多彩  科技无处不在</p>
          <p className="banner-subtitle">Colorful life technology is everywhere</p>
          <div className="detail-button">
            <p>了解更多</p>
            <div className="icon-right"></div>
          </div>
        </div>
      </div>

      {/* 描述 */}
      <div className="describe">
        <div className="product-title">
          <p>有限人生 无限存储</p>
          <p>Limited life Endless storage</p>
        </div>
        <div className="product-image">
          <Image src="https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg" preview={false} />
        </div>
        <div className="describe-en">
          <p>MAKE SOMETHING DIFFERENT</p>
        </div>
        <div className="product-detail">
          <div className="detail">
            <p>内存条</p>
            <p>UDIMM/SO-DIMM</p>
            <div className="detail-button">
              <p>查看详情</p>
              <div className="icon-right"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 产品 */}
      <div className="product">
        { products.map((res, index) => {
          return (
            <div className="product-item" key={index}>
              <div className="product-img">
                <Image src={res.url} preview={false}/>
              </div>
              <div className="product-content">
                <p className="title">{ res.title }</p>
                <p className="subtitle">{ res.subtitle }</p>
                <Link to={`/product/${res.id}`}>
                  <div className="detail-button">
                    <p>查看详情</p>
                    <div className="icon-right"></div>
                  </div>
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
