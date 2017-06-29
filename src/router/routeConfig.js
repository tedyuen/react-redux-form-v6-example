import ProjectContent from '../components/common/content/projectContent/ProjectContent';
import {Simple} from '../components/demo/simple';

const PROJECT = '/project'
const routes = [
  {
    path: PROJECT,
    component: ProjectContent,
    routes: [
      {
        path: PROJECT+'/simple',
        component: Simple
      }
    ]
  }
]

export default routes;
