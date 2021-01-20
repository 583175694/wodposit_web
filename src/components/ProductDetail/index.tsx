import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Image } from 'antd'
import product1 from '../../assets/img_product1.png'
import product2 from '../../assets/img_product2.png'
import product3 from '../../assets/img_product3.png'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  product: any
  describe: string
  current: number
}

class ProductDetail extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      describe: '沃存 1600Mbps DDR3 产品使用 240-Pin (Unbuffered DIMM) 标准针脚设计，以 1.35 伏特电压运作，双数据速率，传输带宽可达 12.8GB/s (PC3 12800)，并推出单支 8GB 大容量内存规格，更具有高速读写及低电耗等特性。\n' +
        '\n' +
        '沃存科技采用JEDEC 和 RoHS 的设计生产规范，高质量的DRAM芯片，具有良好的兼容性和运行可靠性。\n' +
        '\n' +
        '标准型台式高效能内存模组，VLP简约设计，采用高质量DRAM芯片，经过\n严格的检测；具有良好的兼容性和运行的可靠性。',
      product: {
        url: [product1, product2, product3]
      },
      current: 0
    }
  }

  render() {
    const { describe, product, current } = this.state
    return <div className="productDetail-container">
      {/* banner */}
      <div className="banner"></div>

      {/* content */}
      <div className="content">
        <div className="title">DDR3 4GB/8GB台式机</div>
        <div className="describe">{describe}</div>
        <div className="product">
          <Image src={product.url[current]}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
