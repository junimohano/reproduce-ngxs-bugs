import { Action, State, StateContext } from '@ngxs/store';

import { OpenAlert } from './test.actions';

export interface TestStateModel {
  message: string;
}

export const defaultsTestState: TestStateModel = {
  message: 'Alert'
};

@State<TestStateModel>({
  name: 'test',
  defaults: defaultsTestState
})
export class TestState {
  constructor() { }

  @Action(OpenAlert)
  openAlert({ getState }: StateContext<TestStateModel>, { }: OpenAlert): void {
    const state = getState();
    alert(state.message);
  }
}
