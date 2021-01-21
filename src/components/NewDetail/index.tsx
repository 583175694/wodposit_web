import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  describe: string
}

class NewDetail extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      describe: 'NewDetail'
    }
  }

  render() {
    const { describe } = this.state
    return <div className="newDetail-container">
      {/* banner */}
      <div className="banner">
        <div className="mask" />
      </div>
      {/* 新闻详情 */}
      <div className="new">
        <div className="title">
          <p>新闻标题</p>
        </div>
        <div className="new-desc">
          <p>2014年，沃存科技公司在深圳创立。</p>
          <p>1.创立之初，沃存与台湾千奕集团建立了深度战略合作，秉持着高品质的制造工艺以及专业的T5588、T5585测试设备为客户提供卓越的服务。</p>
          <p>2.创业初期以Dram Module OEM代工在业绩站稳脚步，目前稳定代工的合作伙伴有Corsair、AMD、Apacer、PNY等知名 模组厂商。同时与镁光、SAMSUNG、HYNIX等全球内存知 名厂商、经贸合作伙伴均保持着良好的合作关系。</p>
        </div>
        <div className="assets">
          <div className="assets-item assets-1"></div>
          <div className="assets-item assets-2"></div>
          <div className="assets-item assets-3"></div>
        </div>
        <div className="new-desc">
          <p>3、2017年，秉承着为国家自主可控国产化贡献力量的思想，沃 存开始大力推广自有品牌“Wodposit”产品，坚持服务于国 产化品牌领域。</p>
          <p>4、2020年第一季度，沃存已经完成国产CPU原厂龙芯、飞腾、 兆芯、申威的兼容性适配工作，为更好的服务国产电脑品牌客 户奠定牢固的根基。</p>
          <p>5、2020年第二季度，沃存正式成为信息技术应用创新工作委员 会会员单位。</p>
        </div>
        <div className="assets">
          <div className="assets-item assets-4"></div>
          <div className="assets-item assets-5"></div>
        </div>
        <div className="new-desc">
          <p>3、2017年，秉承着为国家自主可控国产化贡献力量的思想，沃 存开始大力推广自有品牌“Wodposit”产品，坚持服务于国 产化品牌领域。</p>
          <p>4、2020年第一季度，沃存已经完成国产CPU原厂龙芯、飞腾、 兆芯、申威的兼容性适配工作，为更好的服务国产电脑品牌客 户奠定牢固的根基。</p>
          <p>5、2020年第二季度，沃存正式成为信息技术应用创新工作委员 会会员单位。</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewDetail)
