import React,{Component} from 'react';
import { connect } from 'react-redux';

class RouteRoot extends Component {
  componentDidMount(){
    const { history } = this.props;
    history.push({
      pathname:'/project/simple',
    });
  }
  render(){
    return(
      <div></div>
    )
  }
}

export default connect()(RouteRoot);
