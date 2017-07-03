import ProjectContent from '../components/common/content/projectContent/ProjectContent';
import {Simple} from '../components/demo/simple';
import {SyncValidation} from '../components/demo/syncValidation';
import {FieldLevelValidation} from '../components/demo/fieldLevelValidation';
import {SubmitValidation} from '../components/demo/submitValidation';
import {AsyncValidation} from '../components/demo/asyncValidation';
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
      },
      {
        path: PROJECT+'/fieldLevelValidation',
        component: FieldLevelValidation
      },
      {
        path: PROJECT+'/submitValidation',
        component: SubmitValidation
      },
      {
        path: PROJECT+'/asyncValidation',
        component: AsyncValidation
      }



    ]
  }
]

export default routes;
