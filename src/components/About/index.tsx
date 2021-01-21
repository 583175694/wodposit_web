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

interface State {}

class About extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return <div className="about-container">
      {/* banner */}
      <div className="banner">
        <div className="mask">
          <p>生活多姿多彩  科技无处不在</p>
          <p>Colorful life technology is everywhere</p>
        </div>
      </div>

      <div className="about">
        {/* 企业介绍 */}
        <div className="introduction">
          <div className="title">
            <p>企业介绍</p>
            <p>Introduction</p>
          </div>
          <div className="content">
            <div className="describe-zh">
              <p>Wodposit沃存科技公司成立以来始终专注于存储领域，向客户提供Wodposit沃存品牌内存、固态硬盘、闪存卡等全系列存储产品及解决方案并可接受客户委托设计其OEM
                Brand，专门服务于个人电脑、移动终端、通信设备、数据中心、云存储等。</p>
              <p>同时与镁光、SAMSUNG、HYNIX等全球内存知名品牌的厂商、经贸合作伙伴均保持着良好的合作关系。公司经过多年的发展，全面建立了完善的渠道销售、线上销售以及售后服务体系，满足了各个层次的客户需求，并赢得了客户的一致认同。</p>
              <div className="icon-logo"></div>
            </div>
            <div className="describe-en">
              <p>Since its establishment, Wodposit Technology Co., Ltd. has always focused on the storage field,
                providing customers with a full range of storage products and solutions including Wodposit brand memory,
                solid state drives, flash memory cards, and accepting customer entrustment to design its OEM Brand,
                which specializes in serving personal computers , Mobile terminals, communication equipment, data
                centers, cloud storage, etc.</p>
              <p>At the same time, it maintains a good cooperative relationship with manufacturers and economic and
                trade partners of global memory brands such as Micron, SAMSUNG, HYNIX and so on. After years of
                development, the company has established a comprehensive channel sales, online sales and after-sales
                service system to meet the needs of customers at all levels and win the unanimous recognition of
                customers.</p>
            </div>
          </div>
        </div>
        {/* 荣誉和资质 */}
        <div className="honor">
          <div className="title">
            <p>荣誉和资质</p>
            <p>Honors & Qualifications</p>
          </div>
          <div className="honor-desc">
            <p>2014年，沃存科技公司在深圳创立。</p>
            <p>1.创立之初，沃存与台湾千奕集团建立了深度战略合作，秉持着高品质的制造工艺以及专业的T5588、T5585测试设备为客户提供卓越的服务。</p>
            <p>2.创业初期以Dram Module OEM代工在业绩站稳脚步，目前稳定代工的合作伙伴有Corsair、AMD、Apacer、PNY等知名 模组厂商。同时与镁光、SAMSUNG、HYNIX等全球内存知 名厂商、经贸合作伙伴均保持着良好的合作关系。</p>
          </div>
          <div className="assets">
            <div className="assets-item assets-1"></div>
            <div className="assets-item assets-2"></div>
            <div className="assets-item assets-3"></div>
          </div>
          <div className="honor-desc">
            <p>3、2017年，秉承着为国家自主可控国产化贡献力量的思想，沃 存开始大力推广自有品牌“Wodposit”产品，坚持服务于国 产化品牌领域。</p>
            <p>4、2020年第一季度，沃存已经完成国产CPU原厂龙芯、飞腾、 兆芯、申威的兼容性适配工作，为更好的服务国产电脑品牌客 户奠定牢固的根基。</p>
            <p>5、2020年第二季度，沃存正式成为信息技术应用创新工作委员 会会员单位。</p>
          </div>
          <div className="assets">
            <div className="assets-item assets-4"></div>
            <div className="assets-item assets-5"></div>
          </div>
          <div className="honor-desc">
            <p>3、2017年，秉承着为国家自主可控国产化贡献力量的思想，沃 存开始大力推广自有品牌“Wodposit”产品，坚持服务于国 产化品牌领域。</p>
            <p>4、2020年第一季度，沃存已经完成国产CPU原厂龙芯、飞腾、 兆芯、申威的兼容性适配工作，为更好的服务国产电脑品牌客 户奠定牢固的根基。</p>
            <p>5、2020年第二季度，沃存正式成为信息技术应用创新工作委员 会会员单位。</p>
          </div>
        </div>
        {/* 联系我们 */}
        <div className="contact">
          <div className="title">
            <p>联系我们</p>
            <p>Contact Us</p>
          </div>
          <div className="contact-item">
            <div><p>地址</p><p>深圳市福田区益田路3013号南方国际广场D栋1208</p></div>
            <div><p>电话</p><p>0755-23913653</p></div>
            <div><p>联系人</p><p>18928680712 彭先生</p></div>
          </div>
          <div className="contact-item">
            <div><p>Address</p><p>1208, Building D, South International Plaza, 3013 Yitian Road, Futian District, Shenzhen</p></div>
            <div><p>Phone</p><p>0755-23913653</p></div>
            <div><p>Contact</p><p>18928680712 Mr. Peng</p></div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
