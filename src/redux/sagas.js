import { all } from 'redux-saga/effects';
import projectSagas from './projects/saga';

export default function* rootSaga() {
  yield all([
    projectSagas(),
  ]);
}
