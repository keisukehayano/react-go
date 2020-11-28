import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Record } from 'immutable';

import { GojsonVolumeList } from '../models/Volume';
import { GoJsonServerActions } from '../actions/goServer';

export class GoServerState extends Record<{
  gojsonVolumeList: GojsonVolumeList;
}>({
  gojsonVolumeList: new GojsonVolumeList(),
}) {}

export const goServerReducer = reducerWithInitialState(new GoServerState()).case(
  GoJsonServerActions.setGoVolumes,
  (state, payload) => {
    return state.set('gojsonVolumeList', payload);
  },
);
