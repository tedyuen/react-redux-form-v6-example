import ProjectContent from '../components/common/content/projectContent/ProjectContent';
import {Simple} from '../components/demo/simple';
import {SyncValidation} from '../components/demo/syncValidation';
const PROJECT = '/project'
const routes = [
  {
    path: PROJECT,
    component: ProjectContent,
    routes: [
      {
        path: PROJECT+'/simple',
        component: Simple
      },
      {
        path: PROJECT+'/syncValidation',
        component: SyncValidation
      }

    ]
  }
]

export default routes;
