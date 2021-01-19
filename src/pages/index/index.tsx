import React from 'react'
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
import ProductDetail from "../../components/ProductDetail";

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

interface State {}

class Index extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      describe: 'Template'
    }
  }

  render() {
    return <div className="index">
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/product/:id" component={ProductDetail}/>
        <Route path="/new" component={New}/>
        <Route path="/list" component={List}/>
        <Route path="/about" component={About}/>
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
