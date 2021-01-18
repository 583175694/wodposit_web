import React, {Component} from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import Header from '../../components/Header'
import './index.less'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  text: string
}

class Index extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      text: 'Template'
    }
  }

  render() {
    const { text } = this.state
    return <div className="container">
      <Header />

    </div>
  }
}

function mapStateToProps(state: RootState): StateProps {
  return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, AnyAction>): DispatchProps => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
