import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Image, Table } from 'antd'
import product1 from '../../assets/img_product1.png'
import product2 from '../../assets/img_product2.png'
import product3 from '../../assets/img_product3.png'
import IMG1 from '../../assets/img_product7.png'
import IMG2 from '../../assets/img_product6.png'
import IMG3 from '../../assets/img_product5.png'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  product: any
  describe: string
  current: number
  recommends: Array<any>
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
      current: 0,
      recommends: [{
        url: IMG1,
        title: 'ECC/REG/服务器',
        subtitle: 'ECC/REG/服务器',
        to: ''
      }, {
        url: IMG2,
        title: 'SSD',
        subtitle: '嵌入式解决方案',
        to: ''
      }]
    }
  }

  onCheckProduct (arg: number) {
    this.setState({
      current: arg
    })
  }

  render() {
    const {describe, product, current, recommends} = this.state

    const dataSource = [
      {
        key: '1',
        title: '产品型号',
        params: 'DDR3 UDIMM',
      },
      {
        key: '2',
        title: '内存规格',
        params: '240Pin Unbuffered DIMM',
      },
      {
        key: '3',
        title: '容量',
        params: '4GB/8GB',
      },
      {
        key: '4',
        title: '颜色',
        params: '绿',
      },
      {
        key: '5',
        title: 'DRAM配置',
        params: '512 x 8',
      },
      {
        key: '6',
        title: 'CL值',
        params: '1',
      },
      {
        key: '7',
        title: '工作电压',
        params: '1.5V',
      },
    ]

    const columns = [
      {
        title: '',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '产品规格',
        dataIndex: 'params',
        key: 'params',
      },
    ]

    return <div className="productDetail-container">
      {/* banner */}
      <div className="banner"></div>

      {/* content */}
      <div className="content">
        <div className="title">DDR3 4GB/8GB台式机</div>
        <div className="describe">{describe}</div>
        <div className="product">
          <div className="figure">
            <Image className="figure-l" src={product.url[current]}/>
            <ul>
              { product.url.map((res: any, index: number) => {
                return (
                  <li onClick={this.onCheckProduct.bind(this, index)}>
                    <Image className={`figure-s ${index === current && "active"}`} src={res} preview={false}></Image>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="param">
            <h2 className="product-title">DDR3 4GB/8GB台式机</h2>
            <ul>
              <li>· 面向企业的数据中心固态硬盘</li>
              <li>· 针对混合用途应用进行了优化</li>
              <li>· U.2 PCIe NVMe Gen3 x4</li>
              <li>· 读取和写入速度高达3,100MB/秒和2,600MB/秒</li>
              <li>· 产品型号： SEDC1000M/960G</li>
            </ul>
            <div className="detail-button">
              <p>下载PDF</p>
              <div className="icon-right"></div>
            </div>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered={true} />
      </div>

      {/* more */}
      <div className="recommend">
        <h5>其他产品推荐</h5>
        <div className="more">
          {recommends.map((res, index) => {
            return (
              <div className="recommend-item" key={index}>
                <Image src={res.url} preview={false}/>
                <div className="recommend-content">
                  <p className="title">{res.title}</p>
                  <p className="subtitle">{res.subtitle}</p>
                  <div className="detail-button">
                    <p>查看详情</p>
                    <div className="icon-right"></div>
                  </div>
                </div>
              </div>
            )
          })}
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
