import React, {Component} from 'react'
import {connect} from 'react-redux'
import {RootState} from '../../core/reducers'
import {ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.less'
import {BrowserRouter, Route} from "react-router-dom";
import Home from "../../components/Home";
import Product from "../../components/Product";
import New from "../../components/New";
import List from "../../components/List";
import About from "../../components/About";

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
    const {text} = this.state
    return <div className="index">
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/new" exact component={New}/>
        <Route path="/list" exact component={List}/>
        <Route path="/about" exact component={About}/>
        <Footer/>
      </BrowserRouter>
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
