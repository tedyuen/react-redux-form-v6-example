import React from 'react'
import {Route} from 'react-router-dom'

import '../style/node/bootstrap.min.css'
import '../style/node/jquery.toast.min.css'
import '../style/node/metisMenu.min.css'
import '../style/pixel/animate.css'
import '../style/pixel/style.css'
import '../style/pixel/colors/purple.css'
import '../style/node/bootstrap-datepicker.min.css'
import '../style/node/dropify.min.css'
import '../style/node/morris.css'
import '../style/node/wizard.css'
import '../style/node/dropzone.css'
import '../style/node/magnific-popup.css'
import '../style/node/multi-select.css'

import RouteWithSubRoutes from './RouteWithSubRoutes';
import routes from './routeConfig';
import RouteRoot from '../components/common/content/RouteRoot';

class MainRouter extends React.Component {

  render() {
    return(
      <div>
        <Route exact path="/" component={RouteRoot}/>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    )
  }
}

export { MainRouter };
