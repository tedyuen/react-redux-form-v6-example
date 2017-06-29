import { LOADING_BLOCK, LOADING_NONE} from './actionTypes';

export const loadingBlock = () => ({
  type: LOADING_BLOCK,
})

export const loadingNone = () => ({
  type: LOADING_NONE,
})
