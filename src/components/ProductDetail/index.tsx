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

class ProductDetail extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      describe: 'Template'
    }
  }

  render() {
    const { describe } = this.state
    return <div className="productDetail-container">
      <div className="banner"></div>
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
