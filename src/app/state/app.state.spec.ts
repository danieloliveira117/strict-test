import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState, AppStateModel, APP_STATE_TOKEN } from './app.state';
import { AddItem } from './app.actions';

describe('App actions', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])]
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  it('should create an action and add an item', () => {
    store.dispatch(new AddItem());
    store.selectOnce(APP_STATE_TOKEN)
      .subscribe((state: AppStateModel) => {
        expect(state.value).toEqual(1);
      });
  });
});
