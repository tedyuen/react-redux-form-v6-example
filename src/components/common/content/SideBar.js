import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

// import { UserProfile } from './UserProfile'
const $ = window.$;
require('metismenu');
class SideBar extends Component {
  componentDidMount(){

    $('#side-menu').metisMenu();

  }
  render(){
    return (
      <div id="sidebar">
        <div className="navbar-default sidebar" role="navigation" style={{paddingTop:'0px'}}>
          <div className="sidebar-nav navbar-collapse slimscrollsidebar">
            <ul className="nav" id="side-menu">
              <li>
                <Link to="/project/simple" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="Z"></i>
                  <span className="hide-menu">Simple Form</span>
                </Link>
              </li>

              <li>
                <a className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="S"></i>
                  <span className="hide-menu">Validation<span className="fa arrow"></span> </span>
                </a>
                <ul className="nav nav-second-level">
                  <li> <Link to="/project/syncValidation">Sync Validation</Link> </li>
                  <li> <Link to="/project/fieldLevelValidation">Field-Level Validation</Link> </li>
                  <li> <Link to="/project/submitValidation">Submit Validation</Link> </li>
                  <li> <Link to="/project/asyncValidation">Async Validation</Link> </li>
                </ul>
              </li>
              <li>
                <Link to="/project/initializeFromState" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="&#xe001;"></i>
                  <span className="hide-menu">Initialize From State</span>
                </Link>
              </li>
              <li>
                <Link to="/project/selectingFormValues" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="&#xe028;"></i>
                  <span className="hide-menu">Selecting Form Values</span>
                </Link>
              </li>
              <li>
                <Link to="/project/fieldArray" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="&#xe005;"></i>
                  <span className="hide-menu">Field Array</span>
                </Link>
              </li>
              <li>
                <Link to="/project/remoteSubmit" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="&#xe017;"></i>
                  <span className="hide-menu">Remote Submity</span>
                </Link>
              </li>
              <li>
                <Link to="/project/normalizing" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon=">"></i>
                  <span className="hide-menu">Normalizing</span>
                </Link>
              </li>
              <li>
                <Link to="/project/wizard" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon=")"></i>
                  <span className="hide-menu">Wizard</span>
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export { SideBar }
