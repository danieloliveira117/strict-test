import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';

import { L10N_LOCALE, L10nLocale } from 'angular-l10n';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';

import { AddItem, ChangeText } from './state/app.actions';
import { AppState } from './state/app.state';

/**
 * App root component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  @Select(AppState.value)
  value$!: Observable<number>;

  @Select(AppState.text)
  text$!: Observable<string>;

  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale, private store: Store) {
  }

  add() {
    this.store.dispatch(new AddItem());
  }

  changeText() {
    this.store.dispatch(new ChangeText('new text'));
  }
}
