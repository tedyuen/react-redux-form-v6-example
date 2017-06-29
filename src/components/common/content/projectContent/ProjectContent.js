import React,{ Component } from 'react'
import {Switch} from 'react-router-dom'
import RouteWithSubRoutes from '../../../../router/RouteWithSubRoutes'
import { SideBar } from '../SideBar'
import { Footer } from '../Footer'

class ProjectContent extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div id="wrapper-inner">
        <SideBar></SideBar>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}


export default ProjectContent;
