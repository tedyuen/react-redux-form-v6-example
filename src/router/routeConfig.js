import ProjectContent from '../components/common/content/projectContent/ProjectContent';
import {Simple} from '../components/demo/simple';
import {SyncValidation} from '../components/demo/syncValidation';
import {FieldLevelValidation} from '../components/demo/fieldLevelValidation';
import {SubmitValidation} from '../components/demo/submitValidation';
import {AsyncValidation} from '../components/demo/asyncValidation';
import {InitializeFromState} from '../components/demo/initializeFromState';
import {SelectingFormValues} from '../components/demo/selectingFormValues';
import {FieldArray} from '../components/demo/fieldArrays';
import {RemoteSubmit} from '../components/demo/remoteSubmit';
import {Normalizing} from '../components/demo/normalizing';

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
      },
      {
        path: PROJECT+'/initializeFromState',
        component: InitializeFromState
      },
      {
        path: PROJECT+'/selectingFormValues',
        component: SelectingFormValues
      },
      {
        path: PROJECT+'/fieldArray',
        component: FieldArray
      },
      {
        path: PROJECT+'/remoteSubmit',
        component: RemoteSubmit
      },
      {
        path: PROJECT+'/normalizing',
        component:Normalizing
      }
    ]
  }
]

export default routes;
