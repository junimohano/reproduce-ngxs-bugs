import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { Save, SetTestId, Update } from './test.actions';

export interface TestStateModel {
  testId: string;
}

export const defaultsTestState: TestStateModel = {
  testId: null
};

@State<TestStateModel>({
  name: 'test',
  defaults: defaultsTestState
})
export class TestState {
  constructor() { }

  @Selector()
  static isEdit(state: TestStateModel): boolean {
    return !!state.testId;
  }

  @Action(SetTestId)
  setTestId({ patchState }: StateContext<TestStateModel>, { id }: SetTestId): void {
    patchState({
      testId: id
    });
  }


  @Action(Save)
  save(ctx: StateContext<TestStateModel>, { }: Save): Observable<any> {
    alert('Save');
    return of(null);
  }

  @Action(Update)
  update(ctx: StateContext<TestStateModel>, { }: Update): Observable<any> {
    alert('Update');
    return of(null);
  }
}
