import { LOADING_BLOCK, LOADING_NONE} from './actionTypes';

export default function (state={
  isFetching:false
},action) {
  switch(action.type) {
    case LOADING_BLOCK:
      return {
        ...state,
        isFetching:true
      };
    case LOADING_NONE:
      return {
        ...state,
        isFetching:false,
      };

    default:
      return state
  }
}
