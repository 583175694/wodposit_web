import React, {Component} from 'react'
import './index.css'
import { connect } from 'react-redux'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {
  text: String
}

class Template extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      text: 'Template'
    }
  }

  render() {
    const { text } = this.state
    return <div className="container">{ text }</div>
  }
}

function mapStateToProps(state: RootState): StateProps {
  return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, AnyAction>): DispatchProps => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)
