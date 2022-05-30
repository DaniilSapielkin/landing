import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import {
  addProjectRequest,
  addProjectSuccess
} from './actions';

import {
  addProject
} from '../../services/projects';

function* sagaAddProjectWorker({ payload }) {
  console.log(payload);
  try {
    yield put(addProjectRequest(true));
    yield call(addProject, payload);
    yield put(addProjectSuccess(false));
  } catch (e) {
    console.log(e);
  }
}
//
export function* sagaAddProjectWatcher() {
  yield takeEvery('ADD_PROJECT_SAGA', sagaAddProjectWorker);
}

export default function* rootSaga() {
  yield all([
    fork(sagaAddProjectWatcher)
  ]);
}
