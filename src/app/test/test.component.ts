import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { OpenAlert } from './store/test.actions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  onOpenAlert(): void {
    this.store.dispatch(new OpenAlert());
  }
}
