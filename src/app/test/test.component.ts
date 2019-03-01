import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';

import { Save, SetTestId, Update } from './store/test.actions';
import { TestState } from './store/test.state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  private get testId(): string {
    return this.activatedRoute.snapshot.params.id;
  }

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new SetTestId(this.testId));
  }

  onSave(): void {
    if (this.store.selectSnapshot(TestState.isEdit)) {
      this.store.dispatch(new Update());
    } else {
      this.store.dispatch(new Save());
    }
  }
}
