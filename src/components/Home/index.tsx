import React, {Component} from 'react'
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.less'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Image } from 'antd'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  banner: Array<Banner>
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
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-1.jpg'
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-2.jpg'
      }, {
        url: 'https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg'
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
    const { banner } = this.state
    return <div className="container">
      {/* Banner */}
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          { banner.map((res, key) => {
            return (
              <div className='swiper-slide' key={key}>
                <Image
                  src={res.url}
                />
              </div>
            )
          })}
        </div>
        {/* 分页器结构 */}
        <div className='swiper-pagination' />
        <div className="mask" />
      </div>

      {/* 描述 */}
      <div className="describe">
        <div className="product-title">
          <p>有限人生 无限存储</p>
          <p>Limited life Endless storage</p>
        </div>
        <div className="product-image">
          <Image src="https://fitness-evaluation-1255704943.cos.ap-guangzhou.myqcloud.com/evaluation/production/flower/banner-3.jpg" />
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
